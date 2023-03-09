import {
  FooterForma,
  FooterFormaBtn,
  FooterFormaInput,
  FooterFormaText,
} from './FormFooter.styled';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { ReactComponent as IconInputFooter } from '../../../images/footer/mail.mob.svg';
import { useMediaRules } from 'MediaRules/MediaRules';

export const FormFooter = () => {
 const { isDesktop } = useMediaRules();
  const dispatch = useDispatch();
  return (
    <>
      <Formik
        initialValues={{ email: `` }}
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
            />
            <IconInputFooter className="icon" />
            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
            <FooterFormaBtn type="submit">Subcribe</FooterFormaBtn>
          </FooterForma>
        )}
      </Formik>
    </>
  );
};
