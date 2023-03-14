import styled from 'styled-components';

export const SearchCont = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  text-align: center;
  width: 100%;
  height: auto;


`;

export const TextSearch = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  color: ${p => p.theme.colors.mainBlack};
  opacity: 0.5;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 24px;
  }
`;

export const ImgContSearch = styled.div`
  width: 208px;
  height: 133px;
  margin: 0 auto;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    width: 350px;
    height: 225px;
    margin-bottom: 32px;
  }
`;
