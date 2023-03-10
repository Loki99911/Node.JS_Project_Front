import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import SVG from 'images/sprite.svg';
import { getColor } from 'components/FormRegister/FormRegister';

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
} from '../FormRegister/style.jsx';
import { Formik } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email().required(),

  //   Yup.mixed().test({
  //   name: 'email',
  //   params: { a: 'test', b: 'qwe' },
  //   test: value => {
  //     return /\w+[^\s]\w+@\w+\.\w{1,5}/.test(value);
  //   },
  // }),
  password: Yup.string()
    .min(4, 'Your password is short')
    .max(25, 'Enter a valid Password*')
    .matches(/[A-Z]/, 'Enter a valid Password*')
    .required('Enter a valid Password*'),
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
        validationSchema={LoginSchema}
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
                  <svg fill={getColor(props.errors.email, props.values.email)}>
                    <use href={`${SVG}#email`}></use>
                  </svg>
                </IconForInput>
                {props.values.email && (
                  <FlagForInput>
                    <svg>
                      <use
                        href={`${SVG}${getColor(
                          props.errors.email,
                          props.values.email
                        )}`}
                      ></use>
                    </svg>
                  </FlagForInput>
                )}
                <InputForAuth
                  type="email"
                  name="email"
                  placeholder="Email"
                  color={getColor(props.errors.email, props.values.email)}
                />
              </BoxForInput>
              <BoxForInput>
                <IconForInput>
                  <SvgAuth
                    color={getColor(
                      props.errors.password,
                      props.values.password
                    )}
                  >
                    <use href={`${SVG}#password`}></use>
                  </SvgAuth>
                </IconForInput>
                {props.values.password && (
                  <FlagForInput>
                    <svg>
                      <use
                        href={`${SVG}${getColor(
                          props.errors.password,
                          props.values.password
                        )}`}
                      ></use>
                    </svg>
                  </FlagForInput>
                )}
                <InputForAuth
                  type="password"
                  name="password"
                  placeholder="Password"
                  color={getColor(props.errors.password, props.values.password)}
                />
                {props.values.password && (
                  <ErrorMessage
                    id="feedback"
                    color={getColor(
                      props.errors.password,
                      props.values.password
                    )}
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
