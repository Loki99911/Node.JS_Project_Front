import styled from 'styled-components';

export const ReportsTable = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: ${div => div.theme.radii.image};
  height: 42px;
  padding: 0 14px;
  margin-bottom: 24px;
  color: ${p => p.theme.colors.mainLight};
  background-color: ${p => p.theme.colors.mainAccent};

    @media screen and (min-width: 768px) {
    height: 58px;    
    padding: 0 20px;
    margin-bottom: 32px;
    }

    @media screen and (min-width: 1440px) {
    height: 60px;
    padding: 0 32px;
    margin-bottom: 50px;
    }


    p {
        font-weight: ${p => p.theme.fontWeights[2]};
        font-size: 10px;
        line-height: 1.5;
        letter-spacing: 0.03em;

    @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.5;
    }
    }

    span {
    margin-left: 16px;
    
    @media screen and (min-width: 768px) {
    margin-left: 38px;
    }

    @media screen and (min-width: 1440px) {
    margin-left: 109px;
    }
  }
`;