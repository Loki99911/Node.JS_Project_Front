import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import {
  CloseBtnWrapper,
  ModalOverlay,
  ModalWindow,
} from './UserInfoModal.styled.js';

import { CloseBtnComp } from 'components/CloseButton/CloseBtn';
import { UserEditFormComp } from './UserEditForm.jsx';
import { LogoutConfirmationComp } from './LogoutConfirm.jsx';

const modalRoot = document.querySelector('#modal-root');

export const UserInfoModal = ({ status, closeModal, name, avatarUrl }) => {
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

  return createPortal(
    <ModalOverlay onClick={onBackdropClick}>
      <ModalWindow>
        <CloseBtnWrapper>
          <CloseBtnComp location="modal" onClick={closeModal} />
        </CloseBtnWrapper>

        {status === 'edit' && (
          <UserEditFormComp
            name={name}
            avatarUrl={avatarUrl}
            closeModal={closeModal}
          />
        )}
        {status === 'logout' && (
          <LogoutConfirmationComp closeModal={closeModal} />
        )}
      </ModalWindow>
    </ModalOverlay>,
    modalRoot
  );
};
