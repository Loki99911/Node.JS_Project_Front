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
import { stylesIngredient, stylesUnit } from 'pages/AddRecipe/selectStyles';

export const AddRecipeIngredients = ({
  counter,
  userIngredients,
  isMobile,
  handleDecrement,
  handleIncrement,
  handleUserIngredient,
  handleUnitValue,
  handleRemove,
  localTheme,
}) => {
  const optionsIngredients = useSelector(getIngredients);

  const userIngredientsList = userIngredients.map(
    ({ id, unitValue, ingredient, qty }) => {
      return (
        <IngredientsItem key={id} localTheme={localTheme}>
          <Select
            styles={stylesIngredient(localTheme)}
            options={ingredientsOptionsList(optionsIngredients)}
            defaultValue={{ label: ingredient, value: ingredient }}
            placeholder=" "
            onChange={handleUserIngredient}
            name={`ingredient ${id}`}
          />
          <ValueInputWrapper isMobile={isMobile} localTheme={localTheme}>
            <InputUnitValue
              isMobile={isMobile}
              type="text"
              name="unitValue"
              onChange={handleUnitValue}
              defaultValue={unitValue}
              autoComplete="off"
              id={id}
            />
            <Select
              styles={stylesUnit(localTheme)}
              options={unitsOptionsList}
              defaultValue={{ label: qty, value: qty }}
              placeholder=" "
              onChange={handleUserIngredient}
              isSearchable={false}
              name={`qty ${id}`}
            />
          </ValueInputWrapper>
          <ButtonRemoveItem type="button" id={id} onClick={handleRemove}>
            <svg width={20} height={20}>
              <use href={icons + '#icon-cross'}></use>
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
