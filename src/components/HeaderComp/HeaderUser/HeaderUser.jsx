import { ButtonSkew } from 'components/ButtonSkew/ButtonSkew';
import { useEffect, useState } from 'react';
import userAvatar from '../../../images/default.jpg';
import { logOut } from 'redux/auth/authOperations';
import {
  HeaderUserButton,
  HeaderUserWrapper,
  UserMenu,
  EditBtn,
} from './HeaderUser.styled';
import sprite from '../../../images/sprite.svg';
import { useDispatch } from 'react-redux';
import { UserInfoModal } from '../UserInfoModal/UserInfoModal';

export const HeaderUser = ({ name = 'User', avatarUrl = userAvatar }) => {
  const dispatch = useDispatch();

  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleUserEditMenu = e => {
    setShowUserMenu(!showUserMenu);
  };

  const onLogOutBtnClick = () => {
    dispatch(logOut());
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
        {showUserMenu && (
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
        )}
      </HeaderUserWrapper>
      {showModal && <UserInfoModal name={name} closeModal={onEditBtnClick} />}
    </>
  );
};
