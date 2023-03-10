import { ButtonSkew } from 'components/ButtonSkew/ButtonSkew';
import { useEffect, useRef, useState } from 'react';
import userAvatar from '../../../images/default.jpg';
import { logOut } from 'redux/auth/authOperations';
import {
  HeaderUserButton,
  HeaderUserWrapper,
  UserMenu,
  Overlay,
  EditBtn,
} from './HeaderUser.styled';
import sprite from '../../../images/sprite.svg';
import { useDispatch } from 'react-redux';

export const HeaderUser = ({ name = 'User', avatarUrl = userAvatar }) => {
  const dispatch = useDispatch();

  const [showUserMenu, setShowUserMenu] = useState(false);
  const userMenuBox = useRef(null);

  const toggleUserEditMenu = e => {
    setShowUserMenu(!showUserMenu);
  };

  const onLogOutBtnClick = () => {
    dispatch(logOut());
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

  // useEffect(() => {
  //   if (userMenuBox.current && showUserMenu) {
  //     const onBackdropClick = event => {
  //       console.log('click', event.target);
  //       if (event.target !== userMenuBox.current) {
  //         setShowUserMenu(!showUserMenu);
  //       }
  //     };

  //     window.addEventListener('click', onBackdropClick);

  //     return () => {
  //       window.removeEventListener('click', onBackdropClick);
  //     };
  //   }
  // }, [showUserMenu]);

  console.log(userMenuBox.current);

  return (
    <HeaderUserWrapper>
      <HeaderUserButton type="button" onClick={toggleUserEditMenu}>
        <img src={avatarUrl} alt={name} />
        <p>{name}</p>
      </HeaderUserButton>
      {showUserMenu && (
        <UserMenu ref={userMenuBox}>
          <EditBtn>
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
  );
};
