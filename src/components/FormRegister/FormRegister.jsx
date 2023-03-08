// import { useDispatch } from 'react-redux';
// import { addContact } from 'redux/operationPhonebook';

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
} from './style';
// import StyleList from '../ComponentStyles/PhonebookStyles';

// const { FormStyle, FieldStyles, BtnStyle, ErrorMessageStyle } = StyleList;

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Required'),

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
const FormRegister = props => {
  //   const dispatch = useDispatch();

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
          //   dispatch(
          //     addContact({
          //       name: values.name.trim(),
          //       phone: values.number.trim(),
          //     })
          //   );
          actions.setSubmitting(false);
          actions.resetForm();
        }}
      >
        {props => (
          <FormForAuth>
            <TitleForForm>Registration</TitleForForm>
            <BoxForInput>
              <IconForInput></IconForInput>
              <FlagForInput></FlagForInput>
              <InputForAuth type="text" name="name" placeholder="Name" />
              {props.errors.name && (
                <div id="feedback">{props.errors.name}</div>
              )}
            </BoxForInput>
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
            <FormButton type="submit">Register</FormButton>
          </FormForAuth>
        )}
      </Formik>
    </div>
  );
};

export default FormRegister;
