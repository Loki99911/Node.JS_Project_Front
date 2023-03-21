import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import SVG from 'images/sprite.svg';
import { getColor } from 'utils/formikColors.js';
import { Formik } from 'formik';
import * as Yup from 'yup';
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
} from '../FormRegister/AuthForm_style.js';

const LoginSchema = Yup.object().shape({
  email: Yup.mixed().test({
    name: 'email',
    params: { a: 'test', b: 'qwe' },
    test: value => {
      return /\w+@\w+\.\w{1,5}/.test(value);
    },
  }),
  password: Yup.string()
    .min(6, 'Your password is short')
    .max(16, 'Your password is to long')
    .matches(/[1-9]/, 'Enter a valid Password*')
    .matches(/[a-zа-яA-ZА-ЯіїЇІєЄ]/, 'Enter a valid Password*')
    .matches(/^[a-zа-яA-ZА-ЯіїЇІЄє1-9]/, 'Enter a valid Password*')
    .required('Enter a Password*'),
});

const FormLogin = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={(values, actions) => {
          dispatch(
            logIn({
              email: values.email.trim(),
              password: values.password.trim(),
            })
          );
          actions.setSubmitting(false);
          actions.resetForm();
        }}
      >
        {({ errors, values }) => (
          <FormForAuth>
            <TitleForForm>Sign in</TitleForForm>
            <BoxForForm>
              <BoxForInput>
                <IconForInput>
                  <svg fill={getColor(errors.email, values.email)}>
                    <use href={`${SVG}#email`}></use>
                  </svg>
                </IconForInput>
                {values.email && (
                  <FlagForInput>
                    <svg>
                      <use
                        href={`${SVG}${getColor(errors.email, values.email)}`}
                      ></use>
                    </svg>
                  </FlagForInput>
                )}
                <InputForAuth
                  type="email"
                  name="email"
                  placeholder="Email"
                  color={getColor(errors.email, values.email)}
                  bordercolor={getColor(
                    errors.email,
                    values.email,
                    'rgba(255, 255, 255, 0.3)'
                  )}
                />
              </BoxForInput>
              <BoxForInput>
                <IconForInput>
                  <SvgAuth color={getColor(errors.password, values.password)}>
                    <use href={`${SVG}#password`}></use>
                  </SvgAuth>
                </IconForInput>
                {values.password && (
                  <FlagForInput>
                    <svg>
                      <use
                        href={`${SVG}${getColor(
                          errors.password,
                          values.password
                        )}`}
                      ></use>
                    </svg>
                  </FlagForInput>
                )}
                <InputForAuth
                  type="password"
                  name="password"
                  placeholder="Password"
                  color={getColor(errors.password, values.password)}
                  bordercolor={getColor(
                    errors.password,
                    values.password,
                    'rgba(255, 255, 255, 0.3)'
                  )}
                />
                {values.password && (
                  <ErrorMessage
                    id="feedback"
                    color={getColor(errors.password, values.password)}
                  >
                    {errors.password || 'Password is secure'}
                  </ErrorMessage>
                )}
              </BoxForInput>
            </BoxForForm>
            <FormButton
              type="submit"
              disabled={errors.password || errors.email ? true : false}
            >
              Sign in
            </FormButton>
          </FormForAuth>
        )}
      </Formik>
      <LinkAuth to="/register">Registration</LinkAuth>
    </div>
  );
};

export default FormLogin;
