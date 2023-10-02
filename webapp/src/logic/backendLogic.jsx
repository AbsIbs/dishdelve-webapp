import { db, storage } from '../../firebase/firebase-config';
import { collection, getDocs, limit, query, where, orderBy, getDoc, doc } from "firebase/firestore";
import { ref, getDownloadURL } from 'firebase/storage'

// Reference
// Multiple recipes
const recipesRef = collection(db, 'recipes');
const blogsRef = collection(db, 'blogs');

// A function to retrieve the user info per recipe and store it 
const retrieveUserInfo = async (array) => {
  const newArray = [...array]
  try {
    for (const item of newArray) {
      const userRef = doc(db, 'users', item.userID);
      const docSnap = await getDoc(userRef);
      const tempData = docSnap.data();
      item.author = tempData.displayName;
      item.profileImageURL = tempData.profileImageURL;
    }
    return newArray;
  } catch (error) {
    console.log(error);
  }
};

// A function to retrieve multiple blogs
export const getBlogs = async (num) => {
  try {
    const q = query(blogsRef, orderBy('timestamp'), limit(num));
    const blogsSnapshot = await getDocs(q)
    const rawBlogs = blogsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    const blogs = await retrieveUserInfo(rawBlogs)
    return blogs;
  } catch (error) {
    console.log(error)
  }
};

export const getBlog = async (id) => {
  try {
    // Reference
    const blogsRef = doc(db, 'blogs', id)
    const blogSnapshot = await getDoc(blogsRef)
    const blog = blogSnapshot.data()
    // Retrieve user information
    const userRef = doc(db, 'users', blog.userID);
    const docSnap = await getDoc(userRef);
    const userData = docSnap.data();
    blog.author = userData.displayName;
    blog.profileImageURL = userData.profileImageURL;
    return blog
  } catch (error) {
    console.log(error)
  }
};

export const fetchMdFile = async (id) => {
  try {
    const mdFileRef = ref(storage, `blogs/${id}/post.md`);
    const downloadUrl = await getDownloadURL(mdFileRef);
    const response = await fetch(downloadUrl);
    const mdContent = await response.text();
    return mdContent;
  } catch (error) {
    console.error('Error fetching MD file:', error);
    throw error; // Re-throw the error so the caller can handle it if needed
  }
};
// Get individual recipe
export const getRecipe = async (id) => {
  try {
    // Reference
    const recipeRef = doc(db, 'recipes', id)
    const recipeSnapshot = await getDoc(recipeRef)
    const recipe = recipeSnapshot.data()
    // Retrieve user information
    const userRef = doc(db, 'users', recipe.userID);
    const docSnap = await getDoc(userRef);
    const userData = docSnap.data();
    recipe.author = userData.displayName;
    recipe.profileImageURL = userData.profileImageURL;
    return recipe
  } catch (error) {
    console.log(error)
  }
};

export const getRecipes = async (num) => {
  try {
    // If there is no last post then retrieve the first 14 initial recipe
    const q = query(recipesRef, orderBy('timestamp'), limit(num));
    const recipesSnapshot = await getDocs(q)
    const rawRecipes = recipesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    const recipes = await retrieveUserInfo(rawRecipes)
    return recipes;
  } catch (error) {
    console.log(error);
  }
};

export const getRandomRecipes = async (num) => {
  try {
    const randomValue = Math.random()
    // Query to retrieve recipes if their randomID field is greater than or equal to our randomValue
    const initialQ = query(
      collection(db, 'recipes'),
      where('randomID', '<=', randomValue.toFixed(2)),
      orderBy('randomID'),
      limit(num)
    );
    const initialQsnapshot = await getDocs(initialQ);
    const rawInitialQRecipes = initialQsnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    // Now, create backwards query if the length of retrieved recipes is less than our desired amount
    if (rawInitialQRecipes.length < num) {
      const additionalQ = query(
        collection(db, 'recipes'),
        where('randomID', '>', randomValue),
        orderBy('randomID'),
        limit(num - rawInitialQRecipes.length)
      );
      const additionalQsnapshot = await getDocs(additionalQ);
      const additionalRawRecipes = additionalQsnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      const rawRecipes = rawInitialQRecipes.concat(additionalRawRecipes)
      const recipes = await retrieveUserInfo(rawRecipes)
      return recipes
    } else {
      const recipes = await retrieveUserInfo(rawInitialQRecipes)
      return recipes
    }
  } catch (error) {
    console.log(error)
  }
};