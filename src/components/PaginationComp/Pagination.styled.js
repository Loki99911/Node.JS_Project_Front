import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  max-width: 275px;
  box-sizing: border-box;
  height: 51px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 12px 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.theme.colors.mainLight};
  box-shadow: 0px 4px 4px rgba(135, 135, 135, 0.2);
  border-radius: ${p => p.theme.radii.pagination};

  @media screen and (min-width: 768px) {
    max-width: 324px;
    height: 55px;
    padding: 14px 24px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 436px;
    padding: 14px 24px;
  }

  & .MuiPaginationItem-page.Mui-selected {
    background-color: ${p => p.theme.colors.secondaryAccent};

    &:hover,
    &:focus {
      background-color: ${p => p.theme.colors.btnHoverBg};
      color: ${p => p.theme.colors.mainLight};
    }
  }
`;
