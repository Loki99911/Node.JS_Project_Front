import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  ModalOverlay,
  ModalWindow,
  UserAvatarWrapper,
  UserEditForm,
  UserSvgWrapper,
} from './UserInfoModal.styled';

import sprite from '../../../images/sprite.svg';

// import defaultAvatar from '../../../images/default.jpg';

const modalRoot = document.querySelector('#modal-root');

export const UserInfoModal = ({ closeModal, name }) => {
  const [path, setPath] = useState('');
  const [inputs, setInputs] = useState({
    name: '',
    file: null,
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
  const handleFile = ({ currentTarget }) => {
    const { files } = currentTarget;
    const [file] = files;
    if (!file?.type.includes('image')) {
      setInputs(prev => ({
        ...prev,
        file: null,
      }));
      return;
    }
    setInputs(prev => ({
      ...prev,
      file,
    }));
    setPath(window.URL.createObjectURL(file));
  };

  const handleSubmit = () => {
    console.log();
  };

  return createPortal(
    <ModalOverlay onClick={onBackdropClick}>
      <ModalWindow>
        <UserEditForm onSubmit={handleSubmit}>
          <UserAvatarWrapper>
            <label htmlFor="file" id="labelFile">
              {inputs.file?.name ? (
                <img src={path} alt="user_picture" />
              ) : (
                <UserSvgWrapper>
                  <svg>
                    <use href={sprite + `#user`} />
                  </svg>
                  {/* <img src={defaultAvatar} alt="user_picture" /> */}
                </UserSvgWrapper>
              )}
            </label>
            <input type="file" id="file" name="file" onChange={handleFile} />
          </UserAvatarWrapper>
        </UserEditForm>
      </ModalWindow>
    </ModalOverlay>,
    modalRoot
  );
};
