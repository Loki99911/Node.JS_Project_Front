import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  InputsWrapper,
  ModalOverlay,
  ModalWindow,
  NameInput,
  NameLabel,
  UserAvatarWrapper,
  UserEditForm,
  UserSvgWrapper,
} from './UserInfoModal.styled';

import sprite from '../../../images/sprite.svg';

const modalRoot = document.querySelector('#modal-root');

export const UserInfoModal = ({ closeModal, name }) => {
  const [path, setPath] = useState('');
  const [inputs, setInputs] = useState({
    name: name,
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

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    console.log('name', name, 'value', value);
    setInputs(prev => ({
      ...prev,
      [name]: value,
    }));
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
                </UserSvgWrapper>
              )}
            </label>
            <input type="file" id="file" name="file" onChange={handleFile} />
          </UserAvatarWrapper>
          <InputsWrapper>
            <NameLabel htmlFor="name" id="labelName">
              <svg>
                <use href={sprite + `#user`} />
              </svg>
              <NameInput
                type="text"
                name="name"
                id="name"
                value={inputs.name}
                onChange={handleChange}
              />
            </NameLabel>
          </InputsWrapper>
        </UserEditForm>
      </ModalWindow>
    </ModalOverlay>,
    modalRoot
  );
};
