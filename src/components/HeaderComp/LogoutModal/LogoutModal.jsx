import { CloseBtnComp } from 'components/CloseButton/CloseBtn';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import {
  CloseBtnWrapper,
  ModalOverlay,
  ModalWindow,
} from '../UserInfoModal/UserInfoModal.styled';

const modalRoot = document.querySelector('#modal-root');

export const UserLogoutModal = ({ closeModal }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const onEscPress = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', onEscPress);

    return () => {
      window.removeEventListener('keydown', onEscPress);
    };
  }, [closeModal]);

  const onBackdropClick = event => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };

  const onLogOutBtnClick = () => {
    dispatch(logOut());
  };

  return createPortal(
    <ModalOverlay onClick={onBackdropClick}>
      <ModalWindow>
        <CloseBtnWrapper>
          <CloseBtnComp location="modal" />
        </CloseBtnWrapper>
      </ModalWindow>
    </ModalOverlay>,
    modalRoot
  );
};
