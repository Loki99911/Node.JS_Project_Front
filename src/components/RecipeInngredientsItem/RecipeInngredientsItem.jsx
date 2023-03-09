import { RecipeItem, ImageWrapper, Label } from "./RecipeInngredientsItem.styled";

const RecipeInngredientsItem = ({image, name, desription, weight, checked }) => {
  return (
    <>
      <RecipeItem>
        <ImageWrapper>
        <img src={image} alt={name} />
      </ImageWrapper>
        <p>{name}</p>
        <Label>
          <input type="checkbox" />
        </Label>
      </RecipeItem>
    </>
  );
};

export default RecipeInngredientsItem;