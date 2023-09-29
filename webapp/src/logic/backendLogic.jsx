import { db } from '../../firebase/firebase-config';
import { collection, getDocs, limit, query, orderBy, getDoc, doc } from "firebase/firestore/lite";


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

export const getRecipes = async (num, order) => {
  try {
    // If there is no last post then retrieve the first 14 initial recipe
    const q = query(recipesRef, orderBy('timestamp', order == 'reverse' ? 'asc' : 'desc'), limit(num));
    const recipesSnapshot = await getDocs(q)
    const rawRecipes = recipesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    const recipes = await retrieveUserInfo(rawRecipes)
    return recipes;
  } catch (error) {
    console.log(error);
  }
};