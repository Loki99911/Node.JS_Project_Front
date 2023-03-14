import { CloseBtn } from './CloseBtn.styled';
import sprite from '../../images/sprite.svg';

export const CloseBtnComp = ({ location, onClick }) => {
  return (
    <CloseBtn location={location} type="button" onClick={onClick}>
      <svg>
        <use href={sprite + `#close-btn`} />
      </svg>
    </CloseBtn>
  );
};
