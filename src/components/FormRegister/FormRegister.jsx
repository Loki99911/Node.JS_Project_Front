import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/authOperations';
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
} from './style';
import SVG from 'images/sprite.svg';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2)
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/)
    .required(),

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
    .matches(/^[A-ZА-Я]*)*$/, 'Your password is little secure')
    .required('Enter a valid Password*'),
});
const FormRegister = props => {
  const dispatch = useDispatch();

  return (
    <div>
      <Formik
        initialValues={{
          name: ``,
          email: ``,
          password: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          dispatch(
            signUp({
              name: values.name.trim(),
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
            <TitleForForm>Registration</TitleForForm>
            <BoxForForm>
              <BoxForInput>
                <IconForInput>
                  <SvgAuth
                    color={
                      props.values.name
                      ? (props.errors.name && '#E74A3B') || '#3CBC81'
                      : 'rgba(255, 255, 255, 0.8)'
                    }
                  >
                    <use href={`${SVG}#person`}></use>
                  </SvgAuth>
                </IconForInput>
                {props.values.name && (
                  <FlagForInput>
                    <svg>
                      <use
                        href={`${SVG}#${
                          (props.errors.name && 'red') || 'green'
                        }`}
                      ></use>
                    </svg>
                  </FlagForInput>
                )}
                <InputForAuth
                  type="text"
                  name="name"
                  placeholder="Name"
                  color={props.values.name
                      ? (props.errors.name && '#E74A3B') || '#3CBC81'
                      : 'rgba(255, 255, 255, 0.8)'}
                />
              </BoxForInput>
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
                  color={props.values.email
                        ? (props.errors.email && '#E74A3B') || '#3CBC81'
                        : 'rgba(255, 255, 255, 0.8)'}
                />
              </BoxForInput>
              <BoxForInput>
                <IconForInput>
                  <SvgAuth
                    color={props.values.password?
                      (props.errors.password ===
                        'Your password is little secure' &&
                        '#F6C23E') ||
                      (props.errors.password && '#E74A3B') ||
                      '#3CBC81': 
                      'rgba(255, 255, 255, 0.8)'
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
                          (props.errors.password ===
                            'Your password is little secure' &&
                            'orange') ||
                          (props.errors.password && 'red') ||
                          'green'
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
                    props.values.password?
                      (props.errors.password ===
                        'Your password is little secure' &&
                        '#F6C23E') ||
                      (props.errors.password && '#E74A3B') ||
                      '#3CBC81': 
                      'rgba(255, 255, 255, 0.8)'
                  }
                />
                {props.values.password && (
                  <ErrorMessage
                    id="feedback"
                    color={
                      (props.errors.password ===
                        'Your password is little secure' &&
                        '#F6C23E') ||
                      (props.errors.password && '#E74A3B') ||
                      '#3CBC81'
                    }
                  >
                    {props.errors.password || 'Password is secure'}
                  </ErrorMessage>
                )}
              </BoxForInput>
            </BoxForForm>
            <FormButton type="submit">Register</FormButton>
          </FormForAuth>
        )}
      </Formik>
      <LinkAuth to="/signin">Sign in</LinkAuth>
    </div>
  );
};

export default FormRegister;
