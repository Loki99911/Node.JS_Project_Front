import { ButtonSkew } from 'components/ButtonSkew/ButtonSkew';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { EditBtn, UserMenu } from './UserLogoModal.styled';
import sprite from '../../../images/sprite.svg';

export const UserLogoModal = ({ onEditBtnClick }) => {
  const dispatch = useDispatch();

  const onLogOutBtnClick = () => {
    dispatch(logOut());
  };

  return (
    <UserMenu>
      <EditBtn type="button" onClick={onEditBtnClick}>
        <span>Edit</span>
        <svg>
          <use href={sprite + `#edit`} />
        </svg>
      </EditBtn>
      <ButtonSkew
        type="button"
        fn={onLogOutBtnClick}
        text={
          <>
            <span>Log Out</span>
            <svg>
              <use href={sprite + `#arrow-right`} />
            </svg>
          </>
        }
        styled="olive"
      />
    </UserMenu>
  );
};
