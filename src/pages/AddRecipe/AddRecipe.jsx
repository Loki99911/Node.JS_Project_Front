import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { TextField } from '@mui/material';
import { Counter } from 'components/Counter/Counter';
import { SubTitle } from 'components/SubTitle/SubTitle';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Select from 'react-select';
import icons from '../../images/sprite.svg';

import {
  AddRecepiSection,
  ButtonRemoveItem,
  IngredientsItem,
  IngredientsList,
  IngredientsSection,
  IngredientsTitle,
  InputsWithSelectWrapper,
  PopularItem,
  PopularSection,
  RecepieSection,
  RecipeForm,
  InputsWrapper,
  SocialLinksWrapper,
  RecepiImg,
  RecipeText,
  PopularRecipe,
  RecipeTitle,
  MainWrapper,
  PupularList,
} from './addRecipe.styled';
import { Title } from 'components/Title/Title';
import { nanoid } from '@reduxjs/toolkit';
import { ButtonSkew } from 'components/ButtonSkew/ButtonSkew';
import { Container } from 'components/Container/Container';
import { SocialLinks } from 'components/FooterComp/SocialLinks/SocialLinks';
import { useDispatch, useSelector } from 'react-redux';
import { getPopular } from 'redux/outerRecipes/outerRecipesSelectors';
import { getPopularRecipes } from 'redux/outerRecipes/outerRecipesOperations';
import { getAllIngredients } from 'redux/ingredients/ingredientsOperations';
import { getIngredients } from 'redux/ingredients/ingredientsSelectors';
import { timeOptionsList } from 'utils/timeOptionsList';
import { ingredientsOptionsList } from 'utils/ingredientsOptionsList';

const optionsUnits = [
  { value: 'gr', label: 'gr' },
  { value: 'kg', label: 'kg' },
  { value: 'mg', label: 'mg' },
];
const optionsCategories = [
  {
    value: 'meet',
    label: 'Meet',
  },
  { value: 'salads', label: 'Salads' },
  { value: 'soups', label: 'Soups' },
];

const AddRecipe = () => {
  const dispatch = useDispatch();
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1399 });
  const [inputs, setInputs] = useState({
    recipe: '',
    file: null,
    title: '',
    about: '',
    category: '',
    time: '',
  });
  const [isValid, setIsValid] = useState({
    recipe: false,
    title: false,
    about: false,
    category: false,
    time: false,
    ingredient: false,
    unit: false,
  });
  const [counter, setCounter] = useState(0);
  const [userIngredients, setUserIngredients] = useState([]);
  const [path, setPath] = useState('');

  const popularRecepis = useSelector(getPopular);
  const optionsIngredients = useSelector(getIngredients);

  useEffect(() => {
    dispatch(getPopularRecipes());
    dispatch(getAllIngredients());
  }, [dispatch]);

  const handleDecrement = () => {
    if (counter <= 0) return;
    setCounter(prev => prev - 1);
    setUserIngredients(prev => [...prev.slice(0, prev.length - 1)]);
  };

  const handleIncrement = () => {
    setCounter(prev => prev + 1);
    setUserIngredients(prev => [...prev, { id: nanoid() }]);
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
    setIsValid(prev => ({ ...prev, [name]: true }));
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

    formData.append('description', recipe);
    formData.append('coockingTime', time);
    formData.append('category', category);
    formData.append('about', about);
    formData.append('title', title);
    formData.append('img', file);
    formData.append(
      'ingredients',
      userIngredients.map(({ id, ...items }) => items)
    );

    const obj = {};
    formData.forEach((val, key) => (obj[key] = val));
    // console.log(userIngredients);
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

  const userIngredientsList = userIngredients.map(el => {
    return (
      <IngredientsItem key={el.id}>
        <Select
          options={ingredientsOptionsList(optionsIngredients)}
          defaultValue={ingredientsOptionsList(optionsIngredients)[2]}
          placeholder=" "
          onChange={handleUserIngredient}
          name={`ingredient ${el.id}`}
        />
        <Select
          options={optionsUnits}
          defaultValue={optionsUnits[2]}
          placeholder=" "
          onChange={handleUserIngredient}
          name={`qty ${el.id}`}
        />
        <ButtonRemoveItem type="click" id={el.id} onClick={handleRemove}>
          <svg width="25" height="25">
            <use href={icons + '#icon-cross'} width="25" height="25"></use>
          </svg>
        </ButtonRemoveItem>
      </IngredientsItem>
    );
  });

  const popularList = tag =>
    popularRecepis.map(({ idMeal, strMealThumb, strInstructions, strMeal }) => (
      <SwiperSlide key={idMeal}>
        <PopularItem as={tag}>
          <RecepiImg src={strMealThumb} alt={strMeal} />
          <div>
            <RecipeTitle>{strMeal}</RecipeTitle>
            <RecipeText>{strInstructions}</RecipeText>
          </div>
        </PopularItem>
      </SwiperSlide>
    ));

  return (
    <Container>
      <Title>Add recipe</Title>
      <MainWrapper isDesktop={isDesktop}>
        <RecipeForm onSubmit={handleSubmit}>
          <AddRecepiSection isDesktop={isDesktop}>
            <div>
              <label htmlFor="file" id="labelFile">
                {inputs.file?.name ? (
                  <img src={path} alt="user_picture" />
                ) : (
                  <svg width="50" height="50">
                    <use href={icons + '#icon-img'} alt="ico"></use>
                  </svg>
                )}
              </label>
              <input type="file" id="file" name="file" onChange={handleFile} />
            </div>
            <InputsWrapper>
              <TextField
                hiddenLabel
                fullWidth
                size="normal"
                variant="standard"
                placeholder="Enter item title"
                name="title"
                value={inputs.title}
                onChange={handleChange}
              />
              <TextField
                hiddenLabel
                fullWidth
                size="normal"
                variant="standard"
                placeholder="Enter about recipe"
                name="about"
                value={inputs.about}
                onChange={handleChange}
              />
              <InputsWithSelectWrapper>
                <TextField
                  hiddenLabel
                  fullWidth
                  size="normal"
                  variant="standard"
                  placeholder="Category"
                  name="category"
                  value={inputs.category}
                  readOnly
                  autoComplete="off"
                />
                <Select
                  options={optionsCategories}
                  defaultValue={optionsCategories[2]}
                  placeholder=" "
                  onChange={handleSelect}
                  name="category"
                />
              </InputsWithSelectWrapper>
              <InputsWithSelectWrapper>
                <TextField
                  hiddenLabel
                  fullWidth
                  size="normal"
                  variant="standard"
                  placeholder="Time"
                  name="time"
                  value={inputs.time}
                  readOnly
                  autoComplete="off"
                />
                <Select
                  options={timeOptionsList()}
                  defaultValue={timeOptionsList()[2]}
                  placeholder=" "
                  onChange={handleSelect}
                  name="time"
                />
              </InputsWithSelectWrapper>
            </InputsWrapper>
          </AddRecepiSection>
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
          <RecepieSection>
            <SubTitle text="Recipe Preparation" />
            <textarea
              name="recipe"
              value={inputs.recipe}
              placeholder="Enter recipe"
              onChange={handleChange}
            ></textarea>
            <ButtonSkew type="submit" text="Add" styled="black" />
          </RecepieSection>
        </RecipeForm>

        <PopularSection isDesktop={isDesktop}>
          {isDesktop && (
            <SocialLinksWrapper>
              <SubTitle text="Follow us" />
              <SocialLinks />
            </SocialLinksWrapper>
          )}
          <PopularRecipe>
            <SubTitle text="Popular recipe" />

            {isTablet && (
              <Swiper
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                centeredSlides={false}
                slidesPerView={2}
                spaceBetween={32}
                freeMode={true}
                modules={[FreeMode, Autoplay]}
                style={{ padding: '20px 0' }}
              >
                {popularList('div')}
              </Swiper>
            )}

            {!isTablet && (
              <PupularList>{popularList('li').slice(0, 4)}</PupularList>
            )}
          </PopularRecipe>
        </PopularSection>
      </MainWrapper>
    </Container>
  );
};

export default AddRecipe;
