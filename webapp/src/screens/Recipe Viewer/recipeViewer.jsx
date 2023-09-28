import { useState, useEffect } from 'react';
import styles from './styles.module.scss'
import { storage, db } from '../../../firebase/firebase-config';
import { useParams } from 'react-router-dom';

const RecipeViewer = () => {
  const { recipeTitle } = useParams();
  useEffect(() => {
    console.log('we are in recipe viewer')
  },[])
  return (
    <div>
      <p>{recipeTitle}</p>
    </div>
  )
};

export default RecipeViewer;