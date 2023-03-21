import { Link } from 'react-router-dom';
import {
  CardImg,
  CardTitle,
  CardDish,
  TooltipWrapper,
} from './CardMeal.styled';
import NoImage from '../../images/default.jpg';
import { scrollToTop } from 'utils/scrollUp';

export const CardMeal = ({ meal }) => {
  return (
    <CardDish>
      <Link to={`/recipe/${meal.idMeal}`} onClick={scrollToTop}>
        <CardImg
          src={meal.strMealThumb ? meal.strMealThumb : { NoImage }}
          alt={meal.strMeal}
        />
        <CardTitle data-tooltip-id={meal.idMeal}>{meal.strMeal}</CardTitle>
        {meal.strMeal.length > 30 && (
          <TooltipWrapper>
            <p>{meal.strMeal}</p>
          </TooltipWrapper>
        )}
      </Link>
    </CardDish>
  );
};
