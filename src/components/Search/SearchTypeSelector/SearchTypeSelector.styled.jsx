import styled from 'styled-components';

export const SelectCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  text-align: center;

  span {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.24px;
    color: #001833;

    @media screen and (min-width: 768px) {
      font-size: 14px;
      line-height: 18px;
    }

    @media screen and (min-width: 1440px) {
      font-size: 18px;
      line-height: 24px;
    }
  }
`;
  
 