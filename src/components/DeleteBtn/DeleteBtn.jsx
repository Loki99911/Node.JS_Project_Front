import sprite from '../../images/sprite.svg';
import { DeleteBtnWrapper } from './DeleteBtn.styled';

export const DeleteBtn = ({ location, id }) => {
  const handleDeleteBtnClick = () => {
    console.log(id);
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
