import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import {
  CardImg,
  CardTitle,
  CardDish,
  TooltipWrapper,
} from './CardMeal.styled';
import NoImage from '../../images/default.jpg';

export const CardMeal = ({ meal }) => {
  return (
    <CardDish>
      <Link to={`/recipe/${meal.idMeal}`}>
        <CardImg
          src={meal.strMealThumb ? meal.strMealThumb : { NoImage }}
          alt={meal.strMeal}
        />
        <CardTitle data-tooltip-id={meal.idMeal}>{meal.strMeal}</CardTitle>
        {meal.strMeal.length > 30 && (
          <TooltipWrapper>
            <Tooltip
              id={meal.idMeal}
              content={meal.strMeal}
              place="bottom"
              noArrow="false"
            />
          </TooltipWrapper>
        )}
      </Link>
    </CardDish>
  );
};
