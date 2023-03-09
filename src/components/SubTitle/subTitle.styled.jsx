import styled from 'styled-components';

export const H3 = styled.h3`
  font-family: ${p => p.theme.fonts.main};
  font-size: 14px;

  font-weight: ${p => p.theme.fontWeights[2]};
  letter-spacing: ${p => p.theme.letterSpacings.subheader};
  line-height: ${p => p.theme.lineHeights.subheader};
  color: ${p => p.theme.colors.secondaryDark};

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;
