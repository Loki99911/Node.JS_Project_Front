import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import SVG from 'images/sprite.svg';

import {
  BoxForInput,
  IconForInput,
  FlagForInput,
  InputForAuth,
  FormButton,
  FormForAuth,
  TitleForForm,
  LinkAuth,
  BoxForForm,
  SvgAuth,
  ErrorMessage,
} from '../FormRegister/style';
import { Formik } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  email: Yup.mixed().test({
    name: 'email',
    params: { a: 'test', b: 'qwe' },
    message: 'It is not a email',
    test: value => {
      return /\w+[^\s]\w+@\w+\.\w{1,5}/.test(value);
    },
  }),
  password: Yup.string()
    .min(7, 'Must min 7')
    .max(25, 'Must max 25')
    .required('Required'),
});
const FormLogin = props => {
  const dispatch = useDispatch();

  return (
    <div>
      <Formik
        initialValues={{
          email: ``,
          password: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          dispatch(
            logIn({
              email: values.email,
              password: values.password.trim(),
            })
          );
          actions.setSubmitting(false);
          actions.resetForm();
        }}
      >
        {props => (
          <FormForAuth>
            <TitleForForm>Sign in</TitleForForm>
            <BoxForForm>
              <BoxForInput>
                <IconForInput>
                  <svg
                    fill={
                      props.values.email
                        ? (props.errors.email && '#E74A3B') || '#3CBC81'
                        : 'rgba(255, 255, 255, 0.8)'
                    }
                  >
                    <use href={`${SVG}#email`}></use>
                  </svg>
                </IconForInput>
                {props.values.email && (
                  <FlagForInput>
                    <svg>
                      <use
                        href={`${SVG}#${
                          (props.errors.email && 'red') || 'green'
                        }`}
                      ></use>
                    </svg>
                  </FlagForInput>
                )}
                <InputForAuth
                  type="email"
                  name="email"
                  placeholder="Email"
                  color={
                    (props.errors.email && '#E74A3B') ||
                    (props.values.email && '#3CBC81')
                  }
                />
              </BoxForInput>
              <BoxForInput>
                <IconForInput>
                  <SvgAuth
                    color={
                      props.values.password
                        ? (props.errors.password && '#E74A3B') || '#3CBC81'
                        : 'rgba(255, 255, 255, 0.8)'
                    }
                  >
                    <use href={`${SVG}#password`}></use>
                  </SvgAuth>
                </IconForInput>
                {props.values.password && (
                  <FlagForInput>
                    <svg>
                      <use
                        href={`${SVG}#${
                          (props.errors.password && 'red') || 'green'
                        }`}
                      ></use>
                    </svg>
                  </FlagForInput>
                )}
                <InputForAuth
                  type="text"
                  name="password"
                  placeholder="Password"
                  color={
                    props.values.password
                      ? (props.errors.password && '#E74A3B') || '#3CBC81'
                      : 'rgba(255, 255, 255, 0.8)'
                  }
                />
                {props.values.password && (
                  <ErrorMessage
                    id="feedback"
                    color={(props.errors.password && '#E74A3B') || '#3CBC81'}
                  >
                    {props.errors.password || 'Password is secure'}
                  </ErrorMessage>
                )}
              </BoxForInput>
            </BoxForForm>
            <FormButton type="submit">Login</FormButton>
          </FormForAuth>
        )}
      </Formik>
      <LinkAuth to="/register">Registration</LinkAuth>
    </div>
  );
};

export default FormLogin;
