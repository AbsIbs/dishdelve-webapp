import { db } from '../../firebase/firebase-config';
import { collection, getDocs, limit, query, where, orderBy, getDoc, doc } from "firebase/firestore";

// Reference
// Multiple recipes
const recipesRef = collection(db, 'recipes');

// A function to retrieve the user info per recipe and store it 
const retrieveUserInfo = async (recipesArray) => {
  const newArray = [...recipesArray]
  try {
    for (const recipe of newArray) {
      const userRef = doc(db, 'users', recipe.userID);
      const docSnap = await getDoc(userRef);
      const tempData = docSnap.data();
      recipe.author = tempData.displayName;
      recipe.profileImageURL = tempData.profileImageURL;
    }
    return newArray;
  } catch (error) {
    console.log(error);
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