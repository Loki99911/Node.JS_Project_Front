import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  position: relative;
  max-width: 275px;
  width: fit-content;
  box-sizing: border-box;
  height: 51px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 12px 26px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.theme.colors.recipeBlockBg};
  box-shadow: ${p => p.theme.colors.paginationShadow};
  border-radius: ${p => p.theme.radii.pagination};

  & nav {
    /* position: absolute; */
    max-width: 100%;
  }

  @media screen and (min-width: 768px) {
    max-width: 324px;
    height: 55px;
    padding: 14px 24px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 436px;
    padding: 14px 24px;
  }

  & .MuiPagination-ul {
    margin-top: 0;
    display: flex;
    max-width: 100%;
    flex-wrap: nowrap;
    gap: 0px;
    color: ${p => p.theme.colors.paginationText};
  }

  & .MuiPaginationItem-page {
    color: ${p => p.theme.colors.paginationText};
    padding: 0;
    min-width: 27px;
  }

  & .MuiPaginationItem-icon {
    fill: ${p => p.theme.colors.paginationText};
  }

  & .MuiPaginationItem-ellipsis {
    color: ${p => p.theme.colors.paginationText};
  }

  & .MuiPaginationItem-page.Mui-selected {
    background-color: ${p => p.theme.colors.paginationBg};
    transition: ${p => p.theme.transitions.main};
    color: ${p => p.theme.colors.mainDark};
    width: 27px;
    height: 27px;

    &:hover,
    &:focus {
      background-color: ${p => p.theme.colors.btnHoverBg};
      color: ${p => p.theme.colors.mainLight};
    }
  }
`;
