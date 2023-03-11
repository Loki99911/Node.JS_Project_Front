import { CardDish } from "components/CardDishes/CardDishes.styled";
import { BtnCategories, CardImg, CardTitle, CardWrapper,  TitlePrew } from "./PreviewCategories.styled";
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NoImage from '../../images/default.jpg';
import { getContentForMain } from "redux/outerRecipes/outerRecipesSelectors";
import { getMainCategories } from "redux/outerRecipes/outerRecipesOperations";
import { useMediaQuery } from "react-responsive";

export const PreviewCategories = ({list}) => {






  return (
    <div>
   <CardWrapper>
               {list.map((meal) => {
                <TitlePrew>{meal}</TitlePrew>
                return  (
                <CardDish key={meal.idMeal}>
                  <CardImg
                    src={meal.strMealThumb ? meal.strMealThumb : {NoImage}}
                    alt={meal.strMeal}
                  />
                  <CardTitle>{meal.strMeal}</CardTitle>
                </CardDish>
              )})}
              <BtnCategories>See all</BtnCategories>
    </CardWrapper>
    </div>
   
  )
};

