import { useEffect, useState } from 'react';
import userAvatar from '../../../images/default.jpg';
import { HeaderUserButton, HeaderUserWrapper } from './HeaderUserLogo.styled';
import { UserInfoModal } from '../UserInfoModal/UserInfoModal';
import { UserLogoModal } from '../HeaderLogoModal/UserLogoModal';

export const HeaderUser = ({
  color = 'light',
  name = 'User',
  avatarUrl = userAvatar,
}) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [statusModal, setStatusModal] = useState('');

  const toggleUserEditMenu = e => {
    setShowUserMenu(!showUserMenu);
  };

  const toggleUserModal = status => {
    setShowModal(!showModal);
    setStatusModal(status);
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
          color={color}
        >
          <img src={avatarUrl} alt={name} />
          <p>{name}</p>
        </HeaderUserButton>

        {showUserMenu && (
          <UserLogoModal
            setShowUserMenu={() => setShowUserMenu}
            toggleModal={toggleUserModal}
          />
        )}
      </HeaderUserWrapper>

      {showModal && (
        <UserInfoModal
          name={name}
          avatarUrl={avatarUrl}
          closeModal={toggleUserModal}
          status={statusModal}
        />
      )}
    </>
  );
};
