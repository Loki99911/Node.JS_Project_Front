import { Link, ContentFooter, TextFooterContainer } from './TextFooter.styled';
import logoFooter from '../../../images/footer/logo_tablet-desk_footer.svg';
import { useMediaRules } from 'hooks/MediaRules';

export const TextFooter = () => {
  const { isMobile } = useMediaRules();
  return (
    <TextFooterContainer>
      <Link to="/">
        <img src={logoFooter} alt="logo footer" />
        So Yummy
      </Link>
      {!isMobile && (
        <>
          <ContentFooter>
            <li>Database of recipes that can be replenished </li>
            <li>Flexible search for desired and unwanted ingredients</li>
            <li>Ability to add your own recipes with photos</li>
            <li>Convenient and easy to use</li>
          </ContentFooter>
        </>
      )}
    </TextFooterContainer>
  );
};
