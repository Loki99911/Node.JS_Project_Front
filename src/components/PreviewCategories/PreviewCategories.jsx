import NoImage from '../../images/default.jpg';
import { BtnCategories, CardDishes, CardTitle, CardWrapper, TitlePrew } from "./PreviewCategories.styled";


export const PreviewCategories = () => {
  return ( 
    <CardWrapper>
    <TitlePrew>Breakfast</TitlePrew>
   <CardDishes> 
     <img src={NoImage} alt={"any"}/>
       <CardTitle>Banana Pancakes</CardTitle>
      
      </CardDishes>
<BtnCategories>See all</BtnCategories>

    </CardWrapper>
  );
};