import { Title } from "components/Title/Title";
import NoImage from '../../images/default.jpg';
import { BtnCategories, CardTitle, CardWrapper, TitlePrew } from "./PreviewCategories.styled";
import { Card } from "@mui/material";

export const PreviewCategories = () => {
  return ( 
    <CardWrapper>
    <TitlePrew>Breakfast</TitlePrew>
   <Card> 
  
   <img src={NoImage} alt={"any"}/>
       <CardTitle>Banana Pancakes</CardTitle>
      
      </Card>
<BtnCategories>See all</BtnCategories>

    </CardWrapper>
  );
};