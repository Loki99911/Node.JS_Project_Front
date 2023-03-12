import styled from '@emotion/styled';

export const Table = styled.ul`
  width: 100%;
`;

export const TableHeaded = styled.li`
  padding: 50px 40px;
  display: flex;
  align-items: start;
  justify-content: start;
  gap: 140px;
  border-bottom: 1px solid rgb(224, 224, 224);
  &:first-child {
    height: 60px;
    padding: 0 40px;
    background-color: green;
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.03em;
    color: #ffffff;
    align-items: center;
    border-radius: 10px;
  }
`;

export const BoxForItemImage = styled.div`
  height: 95px;
  width: 95px;
  background-color: green;
  margin-right: 15px;

  @media screen and (min-width: 376px) and (max-width: 768px) {
    width: 95px;
  }
  @media screen and (min-width: 769px) and (max-width: 1440px) {
    width: 95px;
  }
  @media screen and (min-width: 1441px) {
    width: 95px;
  }
`;

export const TableHeaderNameTitle = styled.div`
  width: 900px;
  display: flex;

  @media screen and (min-width: 376px) and (max-width: 768px) {
  }
  @media screen and (min-width: 769px) and (max-width: 1440px) {
  }
  @media screen and (min-width: 1441px) {
  }
`;

export const TableHeaderTitle = styled.div`
  text-align: center;

  @media screen and (min-width: 376px) and (max-width: 768px) {
  }
  @media screen and (min-width: 769px) and (max-width: 1440px) {
  }
  @media screen and (min-width: 1441px) {
  }
`;

export const ItemName = styled.p`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 16px;
  line-height: calc(24 / 16);

  color: #3e4462;

  @media screen and (min-width: 376px) and (max-width: 768px) {
    width: 95px;
  }
  @media screen and (min-width: 769px) and (max-width: 1440px) {
    width: 95px;
  }
  @media screen and (min-width: 1441px) {
    width: 40px;
  }
`;

export const BoxForItemNumber = styled.p`
  min-width: 70px;
  background-color: green;
  border-radius: 10px;
  padding: 4px 4px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
  text-align: center;
  @media screen and (min-width: 376px) and (max-width: 768px) {
    width: 95px;
  }
  @media screen and (min-width: 769px) and (max-width: 1440px) {
    width: 95px;
  }
  @media screen and (min-width: 1441px) {
    width: 95px;
  }
`;

export const BoxForItemRemove = styled.div`
  width: 70px;
  height: 20px;
  padding: 0 25px;
  @media screen and (min-width: 376px) and (max-width: 768px) {
  }
  @media screen and (min-width: 769px) and (max-width: 1440px) {
  }
  @media screen and (min-width: 1441px) {
  }
`;
