import styled from 'styled-components';

export const RecipeItem = styled.li`
  border-radius: ${li => li.theme.radii.image};
  background-color: ${li => li.theme.colors.secondaryAccent};
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;

  @media screen and (min-width: 768px) {
    margin-right: 24px;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 40px;
  }

  & img {
    border-radius: ${p => p.theme.radii.image};
    width: 57px;
    height: 57px;

    @media screen and (min-width: 768px) {
      width: 136px;
      height: 136px;
    }

    @media screen and (min-width: 1440px) {
      width: 172px;
      height: 172px;
    }
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  padding: 14px 29px 14px 14px;

  @media screen and (min-width: 768px) {
    padding: 21px 58px 21px 28px;
  }

  @media screen and (min-width: 1440px) {
    padding: 5px 70px 5px 36px;
  }
`;

export const CustomCheckbox = styled.span`
  margin-left: 39px;
  position: relative;
  display: inline-block;
  width: 18px;
  height: 18px;
  background: transparent;
  border: 1px solid rgba(126, 126, 126, 0.5);
  border-radius: ${p => p.theme.radii.btnIcon};
  & svg {
    display: inline-block;
    width: 9px;
    height: 9px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);

    @media screen and (min-width: 768px) {
      width: 18px;
      height: 18px;
    }

    @media screen and (min-width: 1440px) {
    }
  }

  @media screen and (min-width: 768px) {
    border: 2px solid rgba(126, 126, 126, 0.5);
    width: 35px;
    height: 35px;
    margin-left: 78px;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 151px;
  }
`;

export const RealCheckbox = styled.input`
  display: none;
  &:checked + ${CustomCheckbox} svg {
    transform: translate(-50%, -50%) scale(1);
  }
`;

export const IngNumber = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  width: 37px;
  height: 23px;
  border-radius: ${p => p.theme.radii.btnIcon};
  background: ${p => p.theme.colors.mainAccent};
  font-weight: ${p => p.theme.fontWeights[2]};
  font-size: 10px;
  line-height: 1.5;
  color: ${p => p.theme.colors.mainLight};

  @media screen and (min-width: 768px) {
    width: 68px;
    height: 35px;
    font-size: 18px;
    line-height: 1.5;
  }
`;

export const TextContainer = styled.div`
  width: 114px;
  height: 54px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;

  @media screen and (min-width: 768px) {
    width: 208px;
    height: 114px;
  }

  @media screen and (min-width: 1440px) {
    width: 547px;
    height: 104px;
  }
`;

export const IngName = styled.title`
  display: block;
  margin-bottom: 4px;
  font-weight: ${p => p.theme.fontWeights[1]};
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: ${p => p.theme.letterSpacings.subheader};
  color: ${li => li.theme.colors.secondaryDark};
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: ${p => p.theme.lineHeights.subheader};
    margin-bottom: 18px;
  }
`;

export const IngDescr = styled.p`
  font-weight: ${p => p.theme.fontWeights[0]};
  font-size: 8px;
  line-height: 1.38;
  letter-spacing: ${p => p.theme.letterSpacings.subheader};
  color: ${p => p.theme.colors.mainGrey};

  @media screen and (min-width: 768px) {
    overflow-y: clip;
    font-size: 24px;
    line-height: ${p => p.theme.lineHeights.subheader};
    font-size: 12px;
    line-height: 1.67;
  }
`;
