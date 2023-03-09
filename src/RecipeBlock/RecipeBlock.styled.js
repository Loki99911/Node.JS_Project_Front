import styled from 'styled-components';

export const RecipeBlockWrapper = styled.li`
  display: flex;
  gap: 4px;
  background-color: ${p => p.theme.colors.mainLight};
  padding: ${p => (p.location === 'favorite' ? '14px' : '0px')};

  @media screen and (min-width: 768px) {
    gap: 8px;
    padding: ${p => (p.location === 'favorite' ? '28px 24px' : '0px')};
  }

  @media screen and (min-width: 1440px) {
    gap: 14px;
    padding: ${p => (p.location === 'favorite' ? '40px' : '0px')};
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    border-radius: ${p => p.theme.radii.image};

    @media screen and (min-width: 1440px) {
      width: ${p => (p.location === 'favorite' ? '318px' : '340px')};
      height: ${p => (p.location === 'favorite' ? '324px' : '372px')};
    }
  }
`;

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${p => (p.location === 'recipes' ? '14px' : '0px')};

  @media screen and (min-width: 768px) {
    padding: ${p => (p.location === 'recipes' ? '28px' : '0px')};
  }

  @media screen and (min-width: 1440px) {
    padding: ${p => (p.location === 'recipes' ? '40px' : '0px')};
  }
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DescrWrapper = styled.div`
  width: 100%;
  margin-top: 14px;
  margin-bottom: 18px;
  font-family: ${p => p.theme.fonts.main};
  font-size: 8px;
  font-weight: ${p => p.theme.fontWeights[0]};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  line-height: ${p => p.theme.lineHeights.description};
  color: ${p => p.theme.colors.mainDark};

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: ${p => p.theme.lineHeights.extraContent};
  }

  @media screen and (min-width: 1440px) {
    margin-top: 30px;
    margin-bottom: 25px;
    font-size: 18px;
    line-height: ${p => p.theme.lineHeights.content};
  }
`;

export const TimeWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Time = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[1]};
  letter-spacing: ${p => p.theme.letterSpacings.subheader};
  line-height: ${p => p.theme.lineHeights.time};
  color: ${p => p.theme.colors.secondaryDark};
  font-size: 10px;
  display: inline-flex;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;
