import { ButtonSkew } from 'components/ButtonSkew/ButtonSkew';
import { SubTitle } from 'components/SubTitle/SubTitle';
import { RecepieSection } from 'pages/AddRecipe/addRecipe.styled';

export const AddRecipeSubmit = ({ inputs, handleChange, localTheme }) => {
  return (
    <RecepieSection localTheme={localTheme}>
      <SubTitle text="Recipe Preparation" />
      <textarea
        name="recipe"
        value={inputs.recipe}
        placeholder="Enter recipe"
        onChange={handleChange}
      ></textarea>
      <ButtonSkew type="submit" text="Add" styled="black" />
    </RecepieSection>
  );
};
