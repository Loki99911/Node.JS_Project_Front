export const AddRecipeToastifyError = ({
  title,
  about,
  ingredientsList,
  recipe,
}) => {
  return (
    <ul>
      <li>{!title ? 'Invalid TITLE' : ''}</li>
      <li>{!about ? 'Invalid ABOUT' : ''}</li>
      <li>{!ingredientsList.length ? 'Invalid INGREDIENTS' : ''}</li>
      <li>{!recipe ? 'Invalid RECIPE' : ''}</li>
    </ul>
  );
};
