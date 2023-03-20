import { BoxForAuth, AuthImage, BoxForImage } from './AuthPages_style';
import authPanaDes from 'images/desktop/AuthPanaDes.png';
import authPanaTab from 'images/tablet/AuthPanaTab-min.png';
import authPanaMob from 'images/mobile/AuthPanaMob-min.png';
import authPanaDesRet from 'images/desktop/AuthPanaDesRet.png';
import authPanaTabRet from 'images/tablet/AuthPanaTabRet-min.png';
import authPanaMobRet from 'images/mobile/AuthPanaMobRet-min.png';

const AuthPages = ({ children }) => {
  return (
    <BoxForAuth>
      <BoxForImage>
        <AuthImage alt="pana">
          <source
            media="(min-width: 1440px)"
            srcSet={`${authPanaDes}, ${authPanaDesRet} 2x`}
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${authPanaTab},
                        ${authPanaTabRet} 2x`}
          />
          <img
            src={authPanaDes}
            srcSet={`${authPanaMob},
                        ${authPanaMobRet} 2x`}
            alt="pana"
          />
        </AuthImage>
      </BoxForImage>
      {children}
    </BoxForAuth>
  );
};

export default AuthPages;
