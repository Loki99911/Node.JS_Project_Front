import styled from 'styled-components';

import mob1 from '../../images/mobile/recipeHero_mob_1x.jpg';
import mob2 from '../../images/mobile/recipeHero_mob_2x.jpg';
import tab1 from '../../images/tablet/recipeHero_tab_1x.jpg';
import tab2 from '../../images/tablet/recipeHero_tab_2x.jpg';
import desktop1 from '../../images/desktop/recipeHero_desktop_1x.jpg';
import desktop2 from '../../images/desktop/recipeHero_desktop_2x.jpg';
import { ButtonSkewStyle } from 'components/ButtonSkew/buttonSkew.styled';

export const RecipeHeroConteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${mob1});
  background-repeat: no-repeat;
  width: 100%;
  height: 455px;
  margin-bottom: 32px;
  padding-top: 144px;

  ${ButtonSkewStyle} {
    color: black;
    &:hover {
      color: white;
    }
  }

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    (-webkit-min-device-pixel-ratio: 2),
    screen and (min-resolution: 2dppx) {
    background-image: url(${mob2});
  }

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
    padding-top: 136px;
    width: 768px;
    height: 495px;
    background-image: url(${tab1});

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${tab2});
    }
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-top: 164px;
    height: 493px;
    background-image: url(${desktop1});

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${desktop2});
    }
  }
`;

export const HeroTitle = styled.title`
  display: block;
  font-weight: 600;
  font-size: 24px;
  line-height: 100%;
  margin-bottom: 18px;
  letter-spacing: ${p => p.theme.letterSpacings.content};
  color: ${p => p.theme.colors.mainAccent};

  @media screen and (min-width: 768px) {
    font-size: 44px;
    margin-bottom: 24px;
  }
  @media screen and (min-width: 1440px) {
  }
`;
