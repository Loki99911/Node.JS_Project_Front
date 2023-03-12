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
import { ResetBtn } from './UserInfoModal.styled';
import { CloseBtnWrapper } from './UserInfoModal.styled';
import { CloseBtnComp } from 'components/CloseButton/CloseBtn';

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
    .min(2, 'Name must contain at least 2 letters')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name must contain only letters'
    )
    .required('Name is required'),
});

export const UserInfoModal = ({ closeModal, name, avatarUrl }) => {
  //  const dispatch = useDispatch();
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
          <CloseBtnComp location="modal" onClick={closeModal} />
        </CloseBtnWrapper>
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
                    <UserSvgWrapper>
                      <img src={path} alt="user_picture" />
                    </UserSvgWrapper>
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
              {props.errors.picture && props.touched.picture ? (
                <ErrorMessage location="file">
                  {props.errors.picture}
                </ErrorMessage>
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
                    onChange={event => {
                      props.setTouched({
                        name: true,
                      });
                      props.setFieldValue('name', event.target.value);
                    }}
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
                  {props.touched.name && props.values.name ? (
                    <FlagForInput>
                      <use
                        href={`${sprite}${getColor(
                          props.errors.name,
                          props.values.name
                        )}`}
                      ></use>
                    </FlagForInput>
                  ) : (
                    props.values.name && (
                      <ResetBtn
                        type="button"
                        onClick={() => props.setFieldValue('name', '')}
                      >
                        <svg>
                          <use href={sprite + `#edit`} />
                        </svg>
                      </ResetBtn>
                    )
                  )}
                </NameLabel>
                {props.errors.name && props.touched.name ? (
                  <ErrorMessage>{props.errors.name}</ErrorMessage>
                ) : null}
                <SubmitBtn
                  type="submit"
                  disabled={
                    !(
                      (props.touched.name &&
                        props.values.name &&
                        !props.errors.name) ||
                      (props.touched.picture &&
                        props.values.picture &&
                        !props.errors.picture)
                    )
                  }
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
