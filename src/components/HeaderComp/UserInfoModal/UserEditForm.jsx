import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import { updateUserInfo } from 'redux/auth/authOperations';
import { getAvatar } from 'redux/auth/authSelectors';
import sprite from '../../../images/sprite.svg';
import { getColor } from 'utils/formikColors';

import {
  FlagForInput,
  InputsWrapper,
  NameInput,
  NameLabel,
  ResetBtn,
  SubmitBtn,
  UserAvatarWrapper,
  UserEditForm,
  UserIcon,
  UserSvgWrapper,
} from './UserEditForm.styled';

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

export const UserEditFormComp = ({ name, avatarUrl, closeModal }) => {
  const dispatch = useDispatch();
  const userAvatar = useSelector(getAvatar);
  const [path, setPath] = useState('');
  const [inputs, setInputs] = useState({
    name: name,
    picture: avatarUrl,
  });

  const handleSubmit = values => {
    const formData = new FormData();
    formData.append('name', values.name.trim());
    formData.append('picture', values.picture);
    dispatch(updateUserInfo(formData));
    closeModal();
  };

  return (
    <Formik
      initialValues={{
        picture: '',
        name: name,
      }}
      validationSchema={EditNameSchema}
      onSubmit={(values, actions) => {
        handleSubmit(values);
        actions.setSubmitting(false);
        actions.resetForm();
      }}
    >
      {props => (
        <UserEditForm onSubmit={props.handleSubmit}>
          <UserAvatarWrapper>
            <label htmlFor="picture" id="labelFile">
              {userAvatar ? (
                <UserSvgWrapper>
                  <img src={userAvatar} alt="user_picture" />
                </UserSvgWrapper>
              ) : inputs.picture?.name ? (
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
                  if (SUPPORTED_FORMATS.includes(event.target.files[0].type)) {
                    setInputs(prev => ({
                      ...prev,
                      picture: event.target.files[0],
                    }));
                    setPath(window.URL.createObjectURL(event.target.files[0]));
                    props.setFieldValue('picture', event.target.files[0]);
                  }
                  props.setFieldValue('picture', event.target.files[0]);
                }
              }}
            />
          </UserAvatarWrapper>
          {props.errors.picture && props.touched.picture ? (
            <ErrorMessage location="file">{props.errors.picture}</ErrorMessage>
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
  );
};
