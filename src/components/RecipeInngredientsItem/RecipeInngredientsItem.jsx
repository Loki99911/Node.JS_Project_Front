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

import { useState } from 'react';

const RecipeInngredientsItem = obj => {
  const [toShoppingList, setToShoppingList] = useState(false);

  const addToShoppingList = () => {
    setToShoppingList(true);
    console.log(obj);
    return;
  };

  return (
    <>
      <RecipeItem>
        <Label>
          <ImageWrapper>
            <img src={obj.image} alt={obj.name} />
          </ImageWrapper>
          <TextContainer>
            <IngName>{obj.name}</IngName>
            <IngDescr>{obj.description}</IngDescr>
          </TextContainer>
          <IngNumber>{obj.weight}</IngNumber>
          <RealCheckbox
            type="checkbox"
            onChange={addToShoppingList}
            disabled={toShoppingList}
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
