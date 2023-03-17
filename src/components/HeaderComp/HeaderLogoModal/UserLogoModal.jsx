import { EditBtn, LogOutBtn, UserMenu } from './UserLogoModal.styled';
import sprite from '../../../images/sprite.svg';

export const UserLogoModal = ({ toggleModal }) => {
  return (
    <>
      <UserMenu>
        <EditBtn type="button" onClick={() => toggleModal('edit')}>
          <span>Edit profile</span>
          <svg>
            <use href={sprite + `#edit`} />
          </svg>
        </EditBtn>
        <LogOutBtn type="button" onClick={() => toggleModal('logout')}>
          <span>Log Out</span>
          <svg>
            <use href={sprite + `#arrow-right`} />
          </svg>
        </LogOutBtn>
      </UserMenu>
    </>
  );
};
