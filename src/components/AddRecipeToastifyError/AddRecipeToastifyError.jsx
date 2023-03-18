export const AddRecipeToastifyError = ({
  title,
  about,
  ingredientsList,
  recipe,
  unit,
}) => {
  return (
    <ul>
      <li>{!title ? 'Invalid TITLE' : ''}</li>
      <li>{!about ? 'Invalid ABOUT' : ''}</li>
      <li>{!ingredientsList.length ? 'Invalid INGREDIENTS' : ''}</li>
      <li>{!recipe ? 'Invalid RECIPE' : ''}</li>
      <li>{unit ? 'Invalid UNIT VALUE' : ''}</li>
    </ul>
  );
};
