import {
  FooterForma,
  FooterFormaBtn,
  FooterFormaInput,
  FooterFormaText,
  FlagForInput,
} from './FormFooter.styled';
import { Formik } from 'formik';
// import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { useMediaRules } from 'MediaRules/MediaRules';
import sprite from '../../../images/sprite.svg';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email().required(),
});

const getColor = (errors, values) => {
  return values
    ? (errors && '#E74A3B') || '#3CBC81'
    : 'rgba(255, 255, 255, 0.8)';
};

const getColorBorder = (errors, values) => {
  return values
    ? (errors && '#E74A3B') || '#3CBC81'
    : 'rgba(255, 255, 255, 0.3)';
};

export const FormFooter = () => {
  const { isDesktop } = useMediaRules();
  // const dispatch = useDispatch();

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
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.email}
              name="email"
              color={getColor(props.errors.email, props.values.email)}
              borderColor={getColorBorder(
                props.errors.email,
                props.values.email
              )}
            />
            <svg
              className="icon"
              fill={getColor(props.errors.email, props.values.email)}
            >
              <use href={sprite + '#email'}></use>
            </svg>
            {props.values.email && (
              <FlagForInput>
                <svg>
                  <use
                    href={`${sprite}#${
                      (props.errors.email && 'red') || 'green'
                    }`}
                  ></use>
                </svg>
              </FlagForInput>
            )}
            <FooterFormaBtn type="submit">Subcribe</FooterFormaBtn>
          </FooterForma>
        )}
      </Formik>
    </>
  );
};
