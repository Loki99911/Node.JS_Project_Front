import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/authOperations';
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
  ErrorMessage,
  BoxForForm,
  LinkAuth,
  SvgAuth,
} from './AuthForm_style.js';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(1)
    .max(16)
    .matches(
      /^[a-zA-Zа-яА-Я1-9іїІЇєЄ]+(([' -][a-zA-Zа-яА-Я1-9іїЇІЄє ])?[a-zA-Zа-яА-Я1-9іїЇІЄє]*)*$/
    )
    .required(),

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
    .matches(/[1-9]/, 'Your password is little secure. Add a number!')
    .matches(
      /[a-zа-яA-ZА-ЯіїЇІєЄ]/,
      'Your password is little secure. Add a letter!'
    )
    .matches(/^[a-zа-яA-ZА-ЯіїЇІЄє1-9]/, 'Enter a valid Password*')
    .required('Enter a Password*'),
});

const FormRegister = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={async(values, actions) => {
          await dispatch(
            signUp({
              name: values.name.trim(),
              email: values.email.trim(),
              password: values.password.trim(),
            })
          ).then((res) => {
            if (res.payload.name === "AxiosError") {
              actions.setSubmitting(false);
            } else {
              actions.resetForm();
            }
          })
        }}
      >
        {({ errors, values }) => (
          <FormForAuth>
            <TitleForForm>Registration</TitleForForm>
            <BoxForForm>
              <BoxForInput>
                <IconForInput>
                  <SvgAuth color={getColor(errors.name, values.name)}>
                    <use href={`${SVG}#person`}></use>
                  </SvgAuth>
                </IconForInput>
                {values.name && (
                  <FlagForInput>
                    <svg>
                      <use
                        href={`${SVG}${getColor(errors.name, values.name)}`}
                      ></use>
                    </svg>
                  </FlagForInput>
                )}
                <InputForAuth
                  type="text"
                  name="name"
                  placeholder="Name"
                  color={getColor(errors.name, values.name)}
                  bordercolor={getColor(
                    errors.name,
                    values.name,
                    'rgba(255, 255, 255, 0.3)'
                  )}
                />
              </BoxForInput>
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
              disabled={
                errors.password || errors.email || errors.name ? true : false
              }
            >
              Sign up
            </FormButton>
          </FormForAuth>
        )}
      </Formik>
      <LinkAuth to="/signin">Sign in</LinkAuth>
    </div>
  );
};

export default FormRegister;
