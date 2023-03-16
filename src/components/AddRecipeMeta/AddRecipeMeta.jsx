import {
  AddRecepiSection,
  InputsWithSelectWrapper,
  InputsWrapper,
  SelectComp,
} from 'pages/AddRecipe/addRecipe.styled';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import { categoriesOptionsList } from 'utils/categoriesOptionList';
import { timeOptionsList } from 'utils/timeOptionsList';
import { getFullCategoryList } from 'redux/outerRecipes/outerRecipesSelectors';
import icons from '../../images/sprite.svg';
import { stylesMeta } from 'pages/AddRecipe/selectStyles';
import store from 'store';

export const AddRecipeMeta = ({
  inputs,
  isDesktop,
  handleFile,
  handleChange,
  handleSelect,
  path,
  file,
  isMobile,
}) => {
  const optionsCategoris = useSelector(getFullCategoryList);
  const theme = store.get('theme');

  return (
    <AddRecepiSection isDesktop={isDesktop} path={path}>
      <div>
        <label htmlFor="file" id="labelFile">
          {!file ? (
            <svg width="50" height="50">
              <use href={icons + '#icon-img'} alt="ico"></use>
            </svg>
          ) : (
            ''
          )}
        </label>
        <input type="file" id="file" name="file" onChange={handleFile} />
      </div>
      <InputsWrapper localTheme={theme} isMobile={isMobile}>
        <input
          size="normal"
          variant="standard"
          placeholder="Enter item title"
          name="title"
          value={inputs.title}
          onChange={handleChange}
          autoComplete="off"
        />
        <input
          size="normal"
          variant="standard"
          placeholder="Enter about recipe"
          name="about"
          value={inputs.about}
          onChange={handleChange}
          autoComplete="off"
        />
        <InputsWithSelectWrapper>
          <SelectComp localTheme={theme} isMobile={isMobile}>
            <p>Categories</p>
            <Select
              styles={stylesMeta(theme)}
              options={categoriesOptionsList(optionsCategoris)}
              defaultValue={{ label: inputs.title, value: inputs.title }}
              placeholder=" "
              onChange={handleSelect}
              name="category"
            />
          </SelectComp>
        </InputsWithSelectWrapper>
        <InputsWithSelectWrapper>
          <SelectComp localTheme={theme} isMobile={isMobile}>
            <p>Cooking time</p>
            <Select
              styles={stylesMeta(theme)}
              options={timeOptionsList()}
              defaultValue={{ label: inputs.time + ' min', value: inputs.time }}
              placeholder=" "
              onChange={handleSelect}
              name="time"
            />
          </SelectComp>
        </InputsWithSelectWrapper>
      </InputsWrapper>
    </AddRecepiSection>
  );
};
