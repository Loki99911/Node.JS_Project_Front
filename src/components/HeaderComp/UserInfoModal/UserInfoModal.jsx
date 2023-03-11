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
import { UserIcon } from './UserInfoModal.styled';
import { ErrorMessage } from './UserInfoModal.styled';

const modalRoot = document.querySelector('#modal-root');

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

const EditNameSchema = Yup.object().shape({
  picture: Yup.mixed().test(
    'type',
    'Only PNG, JPEG and JPG formats are supported',
    value => {
      return !value || (value && SUPPORTED_FORMATS.includes(value?.type));
    }
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
            console.log(values);
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
            <UserEditForm onSubmit={props.handleSubmit}>
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
                  onBlur={() => {
                    props.setTouched({
                      picture: true,
                    });
                  }}
                  onChange={event => {
                    if (event.target.files[0]) {
                      if (
                        SUPPORTED_FORMATS.includes(event.target.files[0].type)
                      ) {
                        setInputs(prev => ({
                          ...prev,
                          picture: event.target.files[0],
                        }));
                        setPath(
                          window.URL.createObjectURL(event.target.files[0])
                        );
                        props.setFieldValue('picture', event.target.files[0]);
                      }
                      props.setFieldValue('picture', event.target.files[0]);
                    }
                  }}
                />
              </UserAvatarWrapper>
              {props.errors.picture ? (
                <ErrorMessage>{props.errors.picture}</ErrorMessage>
              ) : null}

              <InputsWrapper>
                <NameLabel htmlFor="name" id="labelName">
                  <NameInput
                    type="text"
                    name="name"
                    id="name"
                    onBlur={() => {
                      props.setTouched({
                        name: true,
                      });
                    }}
                    onChange={props.handleChange}
                    color={getColor(
                      props.errors.name,
                      props.values.name,
                      '#C4C4C4'
                    )}
                  />
                  <UserIcon
                    stroke={getColor(
                      props.errors.name,
                      props.values.name,
                      '#C4C4C4'
                    )}
                  >
                    <use href={sprite + `#user`} />
                  </UserIcon>
                  {props.touched.name && (
                    <FlagForInput>
                      <use
                        href={`${sprite}${getColor(
                          props.errors.name,
                          props.values.name
                        )}`}
                      ></use>
                    </FlagForInput>
                  )}
                </NameLabel>
                <SubmitBtn
                  type="submit"
                  disabled={!(props.touched.name || props.touched.picture)}
                >
                  Save changes
                </SubmitBtn>
              </InputsWrapper>
            </UserEditForm>
          )}
        </Formik>
      </ModalWindow>
    </ModalOverlay>,
    modalRoot
  );
};
