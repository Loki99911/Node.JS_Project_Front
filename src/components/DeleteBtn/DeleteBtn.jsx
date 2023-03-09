import sprite from 'images/tablet/sprite.svg';
import { DeleteBtnWrapper } from './DeleteBtn.styled';

export const DeleteBtn = ({ location }) => {
  return (
    <DeleteBtnWrapper location={location}>
      <svg>
        <use href={sprite + `#trash`} />
      </svg>
    </DeleteBtnWrapper>
  );
};
