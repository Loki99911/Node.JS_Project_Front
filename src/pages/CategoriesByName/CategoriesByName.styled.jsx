import styled from 'styled-components';

export const RowTable = styled.ul`
  /* display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 100px 14px;  */
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 100px;
  margin-top: 32px;
  gap: 28px;

  @media (min-width: 768px) {
    gap: 32px;
    margin-bottom: 200px;
    margin-top: 50px;
  }

  @media (min-width: 1440px) {
    gap: 14px;
    row-gap: 100px;
    
  }
`;

// export const CardTableWrap = styled.li`
// position: relative;
// `
