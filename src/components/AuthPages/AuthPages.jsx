import { BoxForAuth, AuthImage, BoxForImage } from './style';
import authPana from 'images/desktop/AuthPanaDes.png';

const AuthPages = ({ children }) => {
  return (
    <>
      <BoxForAuth>
        <BoxForImage>
          <AuthImage src={authPana} alt="pana" />
        </BoxForImage>
        {children}
      </BoxForAuth>
    </>
  );
};

export default AuthPages;
