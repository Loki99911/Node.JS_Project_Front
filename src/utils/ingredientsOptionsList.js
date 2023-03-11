export const ingredientsOptionsList = list => {
  return list.map(({ strIngredient }) => ({
    label: strIngredient,
    value: strIngredient,
  }));
};
