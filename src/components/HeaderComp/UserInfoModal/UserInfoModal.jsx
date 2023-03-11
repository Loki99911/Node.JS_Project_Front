import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
import { createPortal } from 'react-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  InputsWrapper,
  FlagForInput,
  ModalOverlay,
  ModalWindow,
  NameInput,
  NameLabel,
  SubmitBtn,
  UserAvatarWrapper,
  UserEditForm,
  UserSvgWrapper,
} from './UserInfoModal.styled';

import sprite from '../../../images/sprite.svg';
import { getColor } from 'utils/formikColors';

const modalRoot = document.querySelector('#modal-root');

const validFileExtensions = {
  image: ['jpg', 'png', 'jpeg'],
};

function isValidFileType(fileName, fileType) {
  return (
    fileName &&
    validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1
  );
}

const EditNameSchema = Yup.object().shape({
  picture: Yup.mixed()
    .required('Required')
    .test('is-valid-type', 'Not a valid image type', value =>
      isValidFileType(value && value.name.toLowerCase(), 'image')
    ),

  name: Yup.string()
    .min(2)
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/)
    .required(),
});

export const UserInfoModal = ({ closeModal, name }) => {
  //  const dispatch = useDispatch();
  const [path, setPath] = useState('');
  const [inputs, setInputs] = useState({
    name: name,
    picture: '',
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
      return;
    }
    setInputs(prev => ({
      ...prev,
      picture: file,
    }));
    setPath(window.URL.createObjectURL(file));
  };

  //   const handleChange = ({ currentTarget }) => {
  //     const { name, value } = currentTarget;
  //     // console.log('name', name, 'value', value);
  //     setInputs(prev => ({
  //       ...prev,
  //       [name]: value,
  //     }));
  //   };

  const handleSubmit = (e, values) => {
    e.preventDefault();
    console.log(inputs);
    //   dispatch(
    //     edit({
    //       name: values.name.trim(),
    //       picture: values.picture,
    //     })
    //   );
  };

  return createPortal(
    <ModalOverlay onClick={onBackdropClick}>
      <ModalWindow>
        <Formik
          initialValues={{
            picture: '',
            name: name,
          }}
          validationSchema={EditNameSchema}
          onSubmit={(values, actions) => {
            //   dispatch(
            //     edit({
            //       name: values.name.trim(),
            //       picture: values.picture,
            //     })
            //   );
            actions.setSubmitting(false);
            actions.resetForm();
          }}
        >
          {props => (
            <UserEditForm onSubmit={handleSubmit}>
              <UserAvatarWrapper>
                <label htmlFor="picture" id="labelFile">
                  {inputs.picture?.name ? (
                    <img src={path} alt="user_picture" />
                  ) : (
                    <UserSvgWrapper>
                      <svg>
                        <use href={sprite + `#user`} />
                      </svg>
                    </UserSvgWrapper>
                  )}
                </label>
                <input
                  type="file"
                  id="picture"
                  name="picture"
                  onChange={handleFile}
                />
              </UserAvatarWrapper>

              <InputsWrapper>
                <NameLabel htmlFor="name" id="labelName">
                  <NameInput
                    type="text"
                    name="name"
                    id="name"
                    // value={inputs.name}
                    // onChange={handleChange}
                    color={getColor(
                      props.errors.name,
                      props.values.name,
                      '#C4C4C4'
                    )}
                  />
                  <svg
                    stroke={getColor(
                      props.errors.name,
                      props.values.name,
                      '#C4C4C4'
                    )}
                  >
                    <use href={sprite + `#user`} />
                  </svg>
                  {props.values.name && (
                    <FlagForInput>
                      <svg>
                        <use
                          href={`${sprite}#${
                            (props.errors.name && 'red') || 'green'
                          }`}
                        ></use>
                      </svg>
                    </FlagForInput>
                  )}
                </NameLabel>
                <SubmitBtn type="submit">Save changes</SubmitBtn>
              </InputsWrapper>
            </UserEditForm>
          )}
        </Formik>
      </ModalWindow>
    </ModalOverlay>,
    modalRoot
  );
};
