import { useDispatch } from 'react-redux';
import {
  deleteFavorite,
  deleteOwnRecipe,
} from 'redux/ownRecipes/ownRecipesOperations';
import sprite from '../../images/sprite.svg';
import { DeleteBtnWrapper } from './DeleteBtn.styled';

export const DeleteBtn = ({ location, id }) => {
  const dispatch = useDispatch();
  const handleDeleteBtnClick = () => {
    if (location === 'favorite') {
      dispatch(deleteFavorite(id));
    } else {
      dispatch(deleteOwnRecipe(id));
    }
  };
  return (
    <DeleteBtnWrapper
      type="button"
      onClick={handleDeleteBtnClick}
      location={location}
    >
      <svg>
        <use href={sprite + `#trash`} />
      </svg>
    </DeleteBtnWrapper>
  );
};
