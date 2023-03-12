import { CloseBtnComp } from 'components/CloseButton/CloseBtn';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import {
  ModalOverlay,
  ModalWindow,
} from '../UserInfoModal/UserInfoModal.styled';
import { CloseBtnWrapper } from './LogoutModal.styled';

const modalRoot = document.querySelector('#modal-root');

export const UserInfoModal = ({ closeModal, name, avatarUrl }) => {
  const dispatch = useDispatch();
  const [path, setPath] = useState('');
  const [inputs, setInputs] = useState({
    name: name,
    picture: avatarUrl,
  });

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
                  <CloseBtnComp location='modal'/>
              </CloseBtnWrapper>
      </ModalWindow>
    </ModalOverlay>,
    modalRoot
  );
};
