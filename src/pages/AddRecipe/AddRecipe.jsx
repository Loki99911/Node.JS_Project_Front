import { TextField } from '@mui/material';
import { Counter } from 'components/Counter/Counter';
import { SubTitle } from 'components/SubTitle/SubTitle';
import { useState } from 'react';
import Select from 'react-select';
import { nanoid } from 'nanoid';

import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';
import iconFile from './img/icon_file.svg';
import {
  AddRecepiSection,
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
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
const options2 = [
  { value: 'gr', label: 'gr' },
  { value: 'kg', label: 'kg' },
  { value: 'mg', label: 'mg' },
];

const AddRecipe = () => {
  const [inputs, setInputs] = useState({ recipe: '', file: null });
  const [counter, setCounter] = useState(0);
  const [ingredients, setIngredients] = useState([]);

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

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const handleFile = ({ currentTarget }) => {
    const { files } = currentTarget;
    const [file] = files;
    setInputs(prev => ({ ...prev, file }));
  };

  return (
    <RecipeWrap>
      <Title text="Add recipe" />
      <AddRecepiSection>
        <label htmlFor="file" id="labelFile">
          {inputs.file?.name ? (
            inputs.file.name
          ) : (
            <img src={iconFile} alt="ico" />
          )}
        </label>
        <input type="file" id="file" name="file" onChange={handleFile} />
        <TextField
          hiddenLabel
          fullWidth
          id="filled-hidden-label-normal"
          value={inputs.title}
          size="normal"
          variant="standard"
          placeholder="Enter item title"
        />
        <TextField
          hiddenLabel
          fullWidth
          id="filled-hidden-label-normal"
          value={inputs.title}
          size="normal"
          variant="standard"
          placeholder="Enter about recipe"
        />
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
        <button type="click">Add</button>
      </RecepieSection>

      <PopularSection>
        <SubTitle text="Popular recipe" />
        <PupularList>{popularList}</PupularList>
      </PopularSection>
    </RecipeWrap>
  );
};

export default AddRecipe;
