import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { RecipeForm, MainWrapper } from './addRecipe.styled';
import { Title } from 'components/Title/Title';
import { nanoid } from '@reduxjs/toolkit';
import { Container } from 'components/Container/Container';
import { useDispatch } from 'react-redux';
import {
  getCategoryList,
  getPopularRecipes,
} from 'redux/outerRecipes/outerRecipesOperations';
import { getAllIngredients } from 'redux/ingredients/ingredientsOperations';
import { addOwnRecipe } from 'redux/ownRecipes/ownRecipesOperations';
import { AddRecipePopular } from 'components/AddRecipePopular/AddRecipePopular';
import { AddRecipeMeta } from 'components/AddRecipeMeta/AddRecipeMeta';
import { AddRecipeIngredients } from 'components/AddRecipeIngredients/AddRecipeIngredients';
import { AddRecipeSubmit } from 'components/AddRecipeSubmit/AddRecipeSubmit';

const AddRecipe = () => {
  const dispatch = useDispatch();

  const isDesktop = useMediaQuery({ minWidth: 1440 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1399 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [inputs, setInputs] = useState({
    recipe: '',
    file: null,
    title: '',
    about: '',
    category: '',
    time: '',
    unitValue: '',
  });

  const [counter, setCounter] = useState(0);
  const [userIngredients, setUserIngredients] = useState([]);
  const [path, setPath] = useState('');

  useEffect(() => {
    dispatch(getPopularRecipes());
    dispatch(getAllIngredients());
    dispatch(getCategoryList());
  }, [dispatch]);

  const handleDecrement = () => {
    if (counter <= 0) return;
    setCounter(prev => prev - 1);
    setUserIngredients(prev => [...prev.slice(0, prev.length - 1)]);
  };

  const handleIncrement = () => {
    setCounter(prev => prev + 1);
    setUserIngredients(prev => [
      ...prev,
      { id: nanoid(), ingredient: 'Beef', unitValue: 100, qty: 'g' },
    ]);
  };

  const handleRemove = ({ currentTarget }) => {
    const newList = userIngredients.filter(el => el.id !== currentTarget.id);
    setUserIngredients(newList);
    setCounter(prev => prev - 1);
  };

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setInputs(prev => ({
      ...prev,
      [name]: value,
    }));
    // setIsValid(prev => ({ ...prev, [name]: true }));
  };

  const handleFile = ({ currentTarget }) => {
    const { files } = currentTarget;
    const [file] = files;
    if (!file?.type.includes('image')) {
      setInputs(prev => ({
        ...prev,
        file: null,
      }));
      return;
    }
    setInputs(prev => ({
      ...prev,
      file,
    }));
    setPath(window.URL.createObjectURL(file));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData();

    const { recipe, time, category, about, title, file } = inputs;

    const ingredientsList = userIngredients.map(
      ({ unitValue, ingredient, qty: unit }) => ({
        ingredient,
        qty: `${unitValue} ${unit}`,
      })
    );

    formData.append('description', recipe);
    formData.append('cookingTime', time);
    formData.append('category', category);
    formData.append('about', about);
    formData.append('title', title);
    formData.append('picture', file);
    formData.append('ingredients', JSON.stringify(ingredientsList));

    // console.log(JSON.stringify(ingredientsList));

    dispatch(addOwnRecipe(formData));

    const obj = {};
    formData.forEach((val, key) => (obj[key] = val));
    // console.log(obj);
  };

  const handleSelect = (...arg) => {
    const [valueObj, nameObj] = arg;
    const { value } = valueObj;
    const { name } = nameObj;
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const handleUserIngredient = (...args) => {
    const [{ value }, { name: dirtyName }] = args;
    const [name, id] = dirtyName.split(' ');

    setUserIngredients(prev => {
      const idx = prev.findIndex(el => el.id === id);
      const [item] = prev.filter(el => el.id === id);
      item[name] = value;
      prev[idx] = item;
      return [...prev];
    });
  };

  const handleUnitValue = ({ currentTarget }) => {
    const { id, value, name } = currentTarget;
    setInputs(prev => ({
      ...prev,
      [name]: value,
    }));
    setUserIngredients(prev => {
      const idx = prev.findIndex(el => el.id === id);
      const [item] = prev.filter(el => el.id === id);
      item[name] = value;
      prev[idx] = item;
      return [...prev];
    });
  };

  return (
    <Container>
      <Title>Add recipe</Title>
      <MainWrapper isDesktop={isDesktop}>
        <RecipeForm onSubmit={handleSubmit} enctype="multipart/form-data">
          <AddRecipeMeta
            path={path}
            inputs={inputs}
            isDesktop={isDesktop}
            handleFile={handleFile}
            handleChange={handleChange}
            handleSelect={handleSelect}
          />
          <AddRecipeIngredients
            counter={counter}
            userIngredients={userIngredients}
            isMobile={isMobile}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
            handleUserIngredient={handleUserIngredient}
            handleUnitValue={handleUnitValue}
            handleRemove={handleRemove}
          />

          <AddRecipeSubmit inputs={inputs} handleChange={handleChange} />
        </RecipeForm>
        <AddRecipePopular isDesktop={isDesktop} isTablet={isTablet} />
      </MainWrapper>
    </Container>
  );
};

export default AddRecipe;
