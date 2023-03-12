import { Counter } from 'components/Counter/Counter';
import { SubTitle } from 'components/SubTitle/SubTitle';
import Select from 'react-select';
import icons from '../../images/sprite.svg';

import {
  ButtonRemoveItem,
  IngredientsItem,
  IngredientsList,
  IngredientsSection,
  IngredientsTitle,
  InputUnitValue,
  ValueInputWrapper,
} from 'pages/AddRecipe/addRecipe.styled';
import { ingredientsOptionsList } from 'utils/ingredientsOptionsList';
import { useSelector } from 'react-redux';
import { getIngredients } from 'redux/ingredients/ingredientsSelectors';
import { unitsOptionsList } from 'utils/unitsOptionsList';

export const AddRecipeIngredients = ({
  counter,
  userIngredients,
  isMobile,
  handleDecrement,
  handleIncrement,
  handleUserIngredient,
  handleUnitValue,
  handleRemove,
}) => {
  const optionsIngredients = useSelector(getIngredients);

  const userIngredientsList = userIngredients.map(
    ({ id, unitValue, ingredient, qty }) => {
      return (
        <IngredientsItem key={id}>
          <Select
            options={ingredientsOptionsList(optionsIngredients)}
            defaultValue={{ label: ingredient, value: ingredient }}
            placeholder=" "
            onChange={handleUserIngredient}
            name={`ingredient ${id}`}
          />
          <ValueInputWrapper>
            <InputUnitValue
              isMobile={isMobile}
              type="number"
              name="unitValue"
              onChange={handleUnitValue}
              defaultValue={unitValue}
              autoComplete="off"
              id={id}
            />
            <Select
              options={unitsOptionsList}
              defaultValue={{ label: qty, value: qty }}
              placeholder=" "
              onChange={handleUserIngredient}
              isSearchable={false}
              name={`qty ${id}`}
            />
          </ValueInputWrapper>
          <ButtonRemoveItem type="button" id={id} onClick={handleRemove}>
            <svg width="25" height="25">
              <use href={icons + '#icon-cross'} width="25" height="25"></use>
            </svg>
          </ButtonRemoveItem>
        </IngredientsItem>
      );
    }
  );
  return (
    <IngredientsSection>
      <IngredientsTitle>
        <SubTitle text="Ingredients" />
        <Counter
          counter={counter}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
        />
      </IngredientsTitle>
      <IngredientsList>{userIngredientsList}</IngredientsList>
    </IngredientsSection>
  );
};
