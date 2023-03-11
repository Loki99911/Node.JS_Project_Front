import { useEffect, useState } from 'react';
import userAvatar from '../../../images/default.jpg';
import { HeaderUserButton, HeaderUserWrapper } from './HeaderUserLogo.styled';
import { UserInfoModal } from '../UserInfoModal/UserInfoModal';
import { UserLogoModal } from '../HeaderLogoModal/UserLogoModal';

export const HeaderUser = ({ name = 'User', avatarUrl = userAvatar }) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleUserEditMenu = e => {
    setShowUserMenu(!showUserMenu);
  };

  const onEditBtnClick = () => {
    setShowModal(!showModal);
    setShowUserMenu(false);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setShowUserMenu(false);
    }, 300);
  };

  useEffect(() => {
    const onEscPress = event => {
      if (event.code === 'Escape') {
        setShowUserMenu(false);
      }
    };

    window.addEventListener('keydown', onEscPress);

    return () => {
      window.removeEventListener('keydown', onEscPress);
    };
  }, []);

  return (
    <>
      <HeaderUserWrapper>
        <HeaderUserButton
          type="button"
          onClick={toggleUserEditMenu}
          onBlur={handleBlur}
        >
          <img src={avatarUrl} alt={name} />
          <p>{name}</p>
        </HeaderUserButton>
        {showUserMenu && <UserLogoModal onEditBtnClick={onEditBtnClick} />}
      </HeaderUserWrapper>
      {showModal && (
        <UserInfoModal
          name={name}
          avatarUrl={avatarUrl}
          closeModal={onEditBtnClick}
        />
      )}
    </>
  );
};
