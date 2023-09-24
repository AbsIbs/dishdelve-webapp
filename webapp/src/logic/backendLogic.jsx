import { db } from '../../firebase/firebase-config';
import { collection, getDocs, limit, query, orderBy, getDoc, doc } from "firebase/firestore/lite";

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

export const getRecipes = async (num) => {
  try {
    // If there is no last post then retrieve the first 14 initial recipe
    const q = query(recipesRef, orderBy('timestamp', 'desc'), limit(num));
    const recipesSnapshot = await getDocs(q)
    const rawRecipes = recipesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    const recipes = await retrieveUserInfo(rawRecipes)
    return recipes;
  } catch (error) {
    console.log(error);
  }
};