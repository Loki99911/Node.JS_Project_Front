import { BoxForAuth, AuthImage, BoxForImage } from './style';
import authPanaDes from 'images/desktop/AuthPanaDes.png';
import authPanaTab from 'images/tablet/AuthPanaTab-min.png';
import authPanaMob from 'images/mobile/AuthPanaMob-min.png';
import { useMediaRules } from 'MediaRules/MediaRules';

const AuthPages = ({ children }) => {
  const { isMobile, isDesktop, isTablet } = useMediaRules();
  return (
    <>
      <BoxForAuth>
        <BoxForImage>
          {isMobile && <AuthImage src={authPanaMob} alt="pana" />}
          {isTablet && <AuthImage src={authPanaTab} alt="pana" />}
          {isDesktop && <AuthImage src={authPanaDes} alt="pana" />}
        </BoxForImage>
        {children}
      </BoxForAuth>
    </>
  );
};

export default AuthPages;
