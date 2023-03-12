import { TextField } from '@mui/material';
import {
  AddRecepiSection,
  InputsWithSelectWrapper,
  InputsWrapper,
} from 'pages/AddRecipe/addRecipe.styled';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import { categoriesOptionsList } from 'utils/categoriesOptionList';
import { timeOptionsList } from 'utils/timeOptionsList';
import { getFullCategoryList } from 'redux/outerRecipes/outerRecipesSelectors';
import icons from '../../images/sprite.svg';

export const AddRecipeMeta = ({
  inputs,
  isDesktop,
  handleFile,
  handleChange,
  handleSelect,
  path,
}) => {
  const optionsCategoris = useSelector(getFullCategoryList);

  return (
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
            options={categoriesOptionsList(optionsCategoris)}
            defaultValue={{ label: 'Breakfast', value: 'Breakfast' }}
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
  );
};
