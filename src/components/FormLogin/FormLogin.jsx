import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { Link } from 'react-router-dom';

import {
  BoxForInput,
  IconForInput,
  FlagForInput,
  InputForAuth,
  FormButton,
  FormForAuth,
  TitleForForm,
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

            <BoxForInput>
              <IconForInput></IconForInput>
              <FlagForInput></FlagForInput>
              <InputForAuth type="email" name="email" placeholder="Email" />
              {props.errors.email && (
                <div id="feedback">{props.errors.email}</div>
              )}
            </BoxForInput>
            <BoxForInput>
              <IconForInput></IconForInput>
              <FlagForInput></FlagForInput>
              <InputForAuth
                type="text"
                name="password"
                placeholder="Password"
              />
              {props.errors.password && (
                <div id="feedback">{props.errors.password}</div>
              )}
            </BoxForInput>
            <FormButton type="submit">Login</FormButton>
          </FormForAuth>
        )}
      </Formik>
      <Link to="/register">Registration</Link>
    </div>
  );
};

export default FormLogin;