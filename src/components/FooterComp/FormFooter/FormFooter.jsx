import {
  FooterForma,
  FooterFormaBtn,
  FooterFormaInput,
  FooterFormaText,
  FlagForInput,
} from './FormFooter.styled';
import { Formik, ErrorMessage } from 'formik';
// import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { useMediaRules } from 'MediaRules/MediaRules';
import sprite from '../../../images/sprite.svg';
import { getColor } from 'utils/formikColors';

const LoginSchema = Yup.object().shape({
  email: Yup.mixed().test({
    name: 'email',
    params: { a: 'test', b: 'qwe' },
    test: value => {
      return /\w+[^\s]\w+@\w+\.\w{1,5}/.test(value);
    },
  }),
});

export const FormFooter = () => {
  const { isDesktop } = useMediaRules();

  const getDisabledBtn = (errors, value) => {
    return !value|| errors ? true : false;
  };

  return (
    <>
      <Formik
        initialValues={{ email: `` }}
        validationSchema={LoginSchema}
        onSubmit={(values, actions) => {
          //  dispatch(
          //    XXXX({
          //      email: values.email,
          //    })
          //  );

          console.log(values.email);
          actions.setSubmitting(false);
          actions.resetForm();
        }}
      >
        {props => (
          <FooterForma onSubmit={props.handleSubmit}>
            {isDesktop && (
              <FooterFormaText>
                <h4>Subscribe to our Newsletter</h4>
                <p>
                  Subscribe up to our newsletter. Be in touch with latest news
                  and special offers, etc.
                </p>
              </FooterFormaText>
            )}
            <FooterFormaInput
              type="email"
              placeholder="Enter your email address"
              onBlur={props.handleBlur}
              onChange={props.handleChange}
              value={props.values.email}
              name="email"
              color={getColor(
                props.errors.email,
                props.values.email,
                'rgba(255, 255, 255, 0.8)'
              )}
              borderColor={getColor(
                props.errors.email,
                props.values.email,
                'rgba(255, 255, 255, 0.3)'
              )}
            />
            <svg
              className="icon"
              fill={getColor(
                props.errors.email,
                props.values.email,
                'rgba(255, 255, 255, 0.8)'
              )}
            >
              <use href={sprite + '#email'}></use>
            </svg>
            {props.values.email && (
              <FlagForInput>
                <svg>
                  <use
                    href={`${sprite}${getColor(
                      props.errors.email,
                      props.values.email,
                      'rgba(255, 255, 255, 0.8)'
                    )}`}
                  ></use>
                </svg>
              </FlagForInput>
            )}
            <ErrorMessage className="error" name="email" component="div" />
            <FooterFormaBtn
              type="submit"
              disabled={getDisabledBtn(props.errors.email, props.values.email)}
            >
              Subcribe
            </FooterFormaBtn>
          </FooterForma>
        )}
      </Formik>
    </>
  );
};
