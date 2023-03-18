import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { toast } from 'react-toastify';

import { useEffect, useState } from 'react';
import store from 'store';

import { RecipeForm, MainWrapper } from './addRecipe.styled';
import { Title } from 'components/Title/Title';
import { nanoid } from '@reduxjs/toolkit';
import { Container } from 'components/Container/Container';
import { useDispatch } from 'react-redux';
import { AddRecipePopular } from 'components/AddRecipePopular/AddRecipePopular';
import { AddRecipeMeta } from 'components/AddRecipeMeta/AddRecipeMeta';
import { AddRecipeIngredients } from 'components/AddRecipeIngredients/AddRecipeIngredients';
import { AddRecipeSubmit } from 'components/AddRecipeSubmit/AddRecipeSubmit';
import { addOwnRecipe } from 'redux/ownRecipes/ownRecipesOperations';
import { useMediaRules } from 'MediaRules/MediaRules';
import { AddRecipeToastifyError } from 'components/AddRecipeToastifyError/AddRecipeToastifyError';

const init = {
  recipe: '',
  title: '',
  about: '',
  category: 'Breakfast',
  time: '30',
  unitValue: 100,
};

const AddRecipe = () => {
  const dispatch = useDispatch();

  const { isDesktop, isTablet, isMobile } = useMediaRules();

  const [inputs, setInputs] = useState(() => {
    const inputs = store.get('userInputs');
    return inputs ? inputs : init;
  });

  const [file, setFile] = useState(null);

  const [userIngredients, setUserIngredients] = useState(() => {
    const ingredients = store.get('userIngredients');
    return ingredients ? ingredients : [];
  });

  const [path, setPath] = useState('');

  useEffect(() => {
    store.set('userInputs', inputs);
    store.set('userIngredients', userIngredients);
  }, [inputs, userIngredients]);

  const handleDecrement = () => {
    if (userIngredients.length <= 0) return;
    setUserIngredients(prev => [...prev.slice(0, prev.length - 1)]);
  };

  const handleIncrement = () => {
    setUserIngredients(prev => [
      ...prev,
      { id: nanoid(), ingredient: 'Beef', unitValue: 100, qty: 'g' },
    ]);
  };

  const handleRemove = ({ currentTarget }) => {
    const newList = userIngredients.filter(el => el.id !== currentTarget.id);
    setUserIngredients(newList);
  };

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setInputs(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFile = ({ currentTarget }) => {
    const { files } = currentTarget;
    const [file] = files;

    if (!file || !file.type.includes('image')) {
      setFile(null);
      setPath('');
      return;
    }
    setFile(file);
    setPath(URL.createObjectURL(file));
  };

  const resetForm = () => {
    setInputs(init);
    setUserIngredients([]);
    setFile(null);
    setPath('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    const { recipe, time, category, about, title } = inputs;

    const unit = userIngredients.some(
      ({ unitValue }) => Number(unitValue) <= 0
    );

    const ingredientsList = userIngredients.map(
      ({ unitValue, ingredient, qty: unit }) => ({
        ingredient,
        qty: `${unitValue} ${unit}`,
      })
    );

    const isInvalid =
      !recipe || !about || !title || !ingredientsList.length || unit;

    if (isInvalid) {
      toast.error(
        <AddRecipeToastifyError
          title={title}
          about={about}
          ingredientsList={ingredientsList}
          recipe={recipe}
          unit={unit}
        />,
        {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        }
      );
      return;
    }

    formData.append('description', recipe);
    formData.append('cookingTime', time);
    formData.append('category', category);
    formData.append('about', about);
    formData.append('title', title);
    formData.append('picture', file);
    formData.append('ingredients', JSON.stringify(ingredientsList));

    dispatch(addOwnRecipe(formData));
    resetForm();
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

  const theme = store.get('theme');

  return (
    <Container>
      <Title>Add recipe</Title>
      <MainWrapper isDesktop={isDesktop}>
        <RecipeForm
          onSubmit={handleSubmit}
          enctype="multipart/form-data"
          isMobile={isMobile}
          localTheme={theme}
        >
          <AddRecipeMeta
            path={path}
            inputs={inputs}
            file={file}
            isDesktop={isDesktop}
            isMobile={isMobile}
            handleFile={handleFile}
            handleChange={handleChange}
            handleSelect={handleSelect}
          />
          <AddRecipeIngredients
            counter={userIngredients.length}
            userIngredients={userIngredients}
            isMobile={isMobile}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
            handleUserIngredient={handleUserIngredient}
            handleUnitValue={handleUnitValue}
            handleRemove={handleRemove}
            localTheme={theme}
          />

          <AddRecipeSubmit
            inputs={inputs}
            handleChange={handleChange}
            localTheme={theme}
          />
        </RecipeForm>
        <AddRecipePopular
          isDesktop={isDesktop}
          isTablet={isTablet}
          localTheme={theme}
        />
      </MainWrapper>
    </Container>
  );
};

export default AddRecipe;
