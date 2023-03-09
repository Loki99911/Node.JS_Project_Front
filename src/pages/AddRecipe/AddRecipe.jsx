import { TextField } from '@mui/material';
import { Counter } from 'components/Counter/Counter';
import { SubTitle } from 'components/SubTitle/SubTitle';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Select from 'react-select';

import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';
import iconFile from './img/icon_file.svg';
import {
  AddRecepiSection,
  Icon,
  IngredientsItem,
  IngredientsList,
  IngredientsSection,
  IngredientsTitle,
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
const options = [
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
const options2 = [
  { value: 'gr', label: 'gr' },
  { value: 'kg', label: 'kg' },
  { value: 'mg', label: 'mg' },
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

  const ingredientsList = ingredients.map(el => {
    return (
      <IngredientsItem key={el.id}>
        <Select options={options} placeholder=" " />
        <Select options={options2} placeholder=" " />
        <button type="click" id={el.id} onClick={handleRemove}>
          x
        </button>
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
    <RecipeWrap>
      <div style={{ width: '100%' }}>
        <Title>Add recipe</Title>
        <AddRecepiSection>
          <div>
            <label htmlFor="file" id="labelFile">
              {inputs.file?.name ? (
                <img src={path} alt="ico" />
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
      </div>

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
    </RecipeWrap>
  );
};

export default AddRecipe;
