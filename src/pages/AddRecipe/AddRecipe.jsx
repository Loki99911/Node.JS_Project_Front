import { TextField } from '@mui/material';
import { Counter } from 'components/Counter/Counter';
import { SubTitle } from 'components/SubTitle/SubTitle';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Select from 'react-select';
import icons from '../../images/sprite.svg';

import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';
import iconFile from './img/icon_file.svg';
import {
  AddRecepiSection,
  ButtonRemoveItem,
  Icon,
  IngredientsItem,
  IngredientsList,
  IngredientsSection,
  IngredientsTitle,
  InputsWithSelectWrapper,
  PopularItem,
  PopularSection,
  PupularList,
  RecepieSection,
  RecipeWrap,
} from './addRecipe.styled';
import { Title } from 'components/Title/Title';
import { nanoid } from '@reduxjs/toolkit';
import { InputsWrapper } from './addRecipe.styled';
import { ButtonSkew } from 'components/ButtonSkew/ButtonSkew';
import { Container } from 'components/Container/Container';

const popular = [
  {
    id: nanoid(),
    img: img1,
    title: 'Banana Pancakes',
    text: 'In a bowl, mash the banana with a fork until it resembles a thick purée...',
  },
  {
    id: nanoid(),
    img: img2,
    title: 'Squash linguine',
    text: 'Pasta is a type of food typically made from an unleavened dough of wheat flour...',
  },
  {
    id: nanoid(),
    img: img3,
    title: 'Baked salmon',
    text: 'Cook in boiling salted water for 10 mins...',
  },
  {
    id: nanoid(),
    img: img4,
    title: 'Sugar Pie',
    text: 'Sugar pie is a dessert in northern French and  Belgiancuisine, where it is called tarte...',
  },
];
const optionsIngredients = [
  {
    value: 'chocolate',
    label: 'Chocolate',
  },
  {
    value: 'strawberry',
    label: 'Strawberry',
  },
  {
    value: 'vanilla',
    label: 'Vanilla',
  },
];
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
const optionsTime = [
  { label: 45, value: 45 },
  { label: 60, value: 60 },
  { label: 90, value: 90 },
];

const AddRecipe = () => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1440px)',
  });
  const [inputs, setInputs] = useState({
    recipe: '',
    file: null,
    title: '',
    about: '',
    category: '',
    time: '',
    ingredient: '',
    unit: '',
  });
  const [counter, setCounter] = useState(0);
  const [ingredients, setIngredients] = useState([]);
  const [path, setPath] = useState('');

  const handleDecrement = () => {
    if (counter <= 0) return;
    setCounter(prev => prev - 1);
    setIngredients(prev => [...prev.slice(0, prev.length - 1)]);
  };

  const handleIncrement = () => {
    setCounter(prev => prev + 1);
    setIngredients(prev => [...prev, { id: nanoid() }]);
  };

  const handleRemove = ({ currentTarget }) => {
    const newList = ingredients.filter(el => el.id !== currentTarget.id);
    setIngredients(newList);
    setCounter(prev => prev - 1);
  };

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    console.log('name', name, 'value', value);
    setInputs(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFile = ({ currentTarget }) => {
    const { files } = currentTarget;
    const [file] = files;
    if (!file.type.includes('image')) return;
    setInputs(prev => ({
      ...prev,
      file,
    }));
    setPath(window.URL.createObjectURL(file));
  };

  const handleAdd = e => {
    console.log(e);
  };

  const handleSelect = (...arg) => {
    const [valueObj, nameObj] = arg;
    const { value } = valueObj;
    const { name } = nameObj;
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const ingredientsList = ingredients.map(el => {
    return (
      <IngredientsItem key={el.id}>
        <Select
          options={optionsIngredients}
          defaultValue={optionsIngredients[2]}
          placeholder=" "
          onChange={handleSelect}
          name="ingredienst"
        />
        <Select
          options={optionsUnits}
          defaultValue={optionsUnits[2]}
          placeholder=" "
          onChange={handleSelect}
          name="unit"
        />
        <ButtonRemoveItem type="click" id={el.id} onClick={handleRemove}>
          <svg width="25" height="25">
            <use href={icons + '#icon-cross'} width="25" height="25"></use>
          </svg>
        </ButtonRemoveItem>
      </IngredientsItem>
    );
  });

  const popularList = popular.map(({ id, title, text, img }) => (
    <PopularItem key={id}>
      <img src={img} alt={title} />
      <div>
        <p>{title}</p>
        <p>{text}</p>
      </div>
    </PopularItem>
  ));

  return (
    <Container>
      <Title>Add recipe</Title>

      <RecipeWrap>
        <AddRecepiSection>
          <div>
            <label htmlFor="file" id="labelFile">
              {inputs.file?.name ? (
                <img src={path} alt="user_picture" />
              ) : (
                <Icon src={iconFile} alt="ico" />
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
              />
              <Select
                options={optionsTime}
                defaultValue={optionsTime[2]}
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
          <IngredientsList>{ingredientsList}</IngredientsList>
        </IngredientsSection>
        <RecepieSection>
          <SubTitle text="Recipe Preparation" />
          <textarea
            name="recipe"
            value={inputs.recipe}
            placeholder="Enter recipe"
            onChange={handleChange}
          ></textarea>
          <ButtonSkew type="click" text="Add" fn={handleAdd} styled="black" />
        </RecepieSection>
      </RecipeWrap>

      <PopularSection>
        {isDesktop && (
          <div>
            <SubTitle text="Follow us" />
            <div
              style={{
                width: '165px',
                height: '50px',
                backgroundColor: 'red',
              }}
            ></div>
          </div>
        )}
        <div>
          <SubTitle text="Popular recipe" />
          <PupularList>{popularList}</PupularList>
        </div>
      </PopularSection>
    </Container>
  );
};

export default AddRecipe;
