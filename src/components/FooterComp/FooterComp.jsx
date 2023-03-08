import { FooterConteiner, FooterBg, FooterSm } from './FooterComp.styled';
import { Container } from 'components/Container/Container';

export const FooterComp = () => {
  return (
    <FooterConteiner>
      <FooterBg>
        <Container></Container>
      </FooterBg>
      <FooterSm>
        <p>
          © 2023 All Rights Reserved. <span>Terms of Service</span>
        </p>
      </FooterSm>
    </FooterConteiner>
  );
};
