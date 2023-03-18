import {
  RecipeItem,
  ImageWrapper,
  Label,
  RealCheckbox,
  CustomCheckbox,
  IngNumber,
  TextContainer,
  IngName,
  IngDescr,
} from './RecipeInngredientsItem.styled';
import sprite from '../../images/sprite.svg';

import { useState, useEffect } from 'react';
import {
  addShoppingIngredient,
  removeShoppingIngredient,
} from 'redux/ingredients/ingredientsOperations';
import { useDispatch } from 'react-redux';

const RecipeInngredientsItem = obj => {
  const dispatcher = useDispatch();

  const addToShoppingList = () => {
    if (obj.inShoppingList) {
      const ingrid = obj.list.filter(item => item.recipeId === obj.recipeId)[0];
      dispatcher(removeShoppingIngredient(ingrid._id));
      return;
    }

    dispatcher(
      addShoppingIngredient({
        image: obj.image,
        strIngredient: obj.strIngredient,
        weight: obj.weight,
        recipeId: obj.recipeId,
      })
    );
    return obj.inShoppingList;
  };

  return (
    <>
      <RecipeItem>
        <Label>
          <ImageWrapper>
            <img src={obj.image} alt={obj.strIngredient} />
          </ImageWrapper>
          <TextContainer>
            <IngName>{obj.strIngredient}</IngName>
            <IngDescr>{obj.strDescription}</IngDescr>
          </TextContainer>
          <IngNumber>{obj.weight}</IngNumber>
          <RealCheckbox
            type="checkbox"
            onChange={addToShoppingList}
            checked={obj.inShoppingList}
          />
          <CustomCheckbox>
            <svg>
              <use href={sprite + `#icon-pick`} />
            </svg>
          </CustomCheckbox>
        </Label>
      </RecipeItem>
    </>
  );
};

export default RecipeInngredientsItem;
