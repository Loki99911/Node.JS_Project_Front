import styled from 'styled-components';

export const RecipeBlockWrapper = styled.div`
  height: 152px;
  width: 100%;
  display: flex;
  gap: ${p => (p.location === 'favorite' ? '14px' : '4px')};
  background-color: ${p =>
    p.location === 'favorite' ? p.theme.colors.recipeBlockBg : 'transparent'};
  padding: ${p => (p.location === 'favorite' ? '14px' : '0px')};
  border-radius: ${p => p.theme.radii.image};

  @media screen and (min-width: 768px) {
    height: 288px;
    gap: ${p => (p.location === 'favorite' ? '24px' : '8px')};
    padding: ${p => (p.location === 'favorite' ? '28px 24px' : '0px')};
  }

  @media screen and (min-width: 1440px) {
    height: 372px;
    gap: ${p => (p.location === 'favorite' ? '40px' : '14px')};
    padding: ${p => (p.location === 'favorite' ? '40px' : '0px')};
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    border-radius: ${p => p.theme.radii.image};
    width: ${p => (p.location === 'favorite' ? '124px' : '130px')};
    height: ${p => (p.location === 'favorite' ? '124px' : '152px')};

    @media screen and (min-width: 768px) {
      width: ${p => (p.location === 'favorite' ? '228px' : '250px')};
      height: ${p => (p.location === 'favorite' ? '232px' : '100%')};
    }

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
  flex-grow: 1;

  border-radius: ${p =>
    p.location === 'recipes' ? p.theme.radii.image : 'none'};
  background-color: ${p =>
    p.location === 'recipes' ? p.theme.colors.recipeBlockBg : 'transparent'};
  padding: ${p => (p.location === 'recipes' ? '14px' : '0px')};

  @media screen and (min-width: 768px) {
    padding: ${p => (p.location === 'recipes' ? '28px' : '0px')};
  }

  @media screen and (min-width: 1440px) {
    padding: ${p => (p.location === 'recipes' ? '40px' : '0px')};
  }
`;

export const TitleWrapper = styled.div`
  max-width: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  flex-grow: 0;
`;

export const SubTitle = styled.div`
  max-width: calc(80% - 18px);
  height: fit-content;
  font-family: ${p => p.theme.fonts.main};
  font-size: 14px;
  font-weight: ${p => p.theme.fontWeights[1]};
  letter-spacing: ${p => p.theme.letterSpacings.subheader};
  color: ${p => p.theme.colors.secondaryDark};

  & h3 {
    display: inline-block;
    max-width: 130px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    @media screen and (min-width: 768px) {
      max-width: 300px;
    }

    @media screen and (min-width: 1440px) {
      max-width: 650px;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const DescrWrapper = styled.div`
  width: 100%;
  height: 50%;
  margin-top: 14px;
  margin-bottom: 18px;
  text-overflow: ellipsis;
  font-family: ${p => p.theme.fonts.main};
  font-size: 8px;
  font-weight: ${p => p.theme.fontWeights[0]};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  line-height: ${p => p.theme.lineHeights.description};
  color: ${p => p.theme.colors.mainDark};

  & span {
    max-width: 100%;
    width: 100%;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;

    @media screen and (min-width: 768px) {
      -webkit-line-clamp: 5;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: ${p => p.theme.lineHeights.extraContent};
  }

  @media screen and (min-width: 1440px) {
    margin-top: 30px;
    margin-bottom: 25px;
    font-size: 18px;
    line-height: ${p => p.theme.lineHeights.content};

    & br {
      display: block;
      content: '';
      margin-bottom: 14px;
    }
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
