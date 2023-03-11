import NoImage from '../../images/default.jpg';
import { CardDish, CardImg, CardTitle } from './CardDishes.styled';

export const CardDishes = () => {

  return ( <>
     <CardDish> 
        <CardImg src={NoImage} alt={"any"}/>
        <CardTitle>Banana Pancakes</CardTitle>
    </CardDish>
        
    </>
    
  );
};