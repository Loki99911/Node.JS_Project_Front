import {
  FooterConteiner,
  FooterBg,
  FooterSm,
  Wrap,
  WrapDesk,
} from './FooterComp.styled';
import { TextFooter } from './TextFooter/TextFooter';
import { NavFooter } from './NavFooter/NavFooter';
import { FormFooter } from './FormFooter/FormFooter';
import { SocialLinks } from './SocialLinks/SocialLinks';

export const FooterComp = () => {
  return (
    <FooterConteiner>
      <FooterBg>
        <WrapDesk>
          <Wrap>
            <TextFooter />
            <NavFooter />
          </Wrap>
          <FormFooter />
        
        </WrapDesk>
          <SocialLinks />
      </FooterBg>
      <FooterSm>
        <p>
          © 2023 All Rights Reserved. <span>Terms of Service</span>
        </p>
      </FooterSm>
    </FooterConteiner>
  );
};
