import styled from 'styled-components';

export const PreparationWrapper = styled.div`
  margin-bottom: 100px;

  @media screen and (min-width: 768px) {
    margin-bottom: 200px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 107px;
  }
`;
export const InstructionWrapper = styled.div`
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 53px;
  }

  @media screen and (min-width: 1440px) {
    width: 469px;
    margin-bottom: 0;
  }
`;

export const InstructionTitle = styled.title`
  display: block;
  margin-bottom: 30px;
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.secondaryDark};
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    letter-spacing: -0.24px;
  }
`;

export const InstructionList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  gap: 14px;

  @media screen and (min-width: 768px) {
    gap: 18px;
    font-size: 14px;
    line-height: 1.29;
  }
`;

export const InstructionText = styled.li`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  align-items: flex-start;
  gap: 14px;

  & span {
    display: flex;
    justify-content: center;
    gap: 10px;
    width: 21px;
    height: 21px;
    padding: 2px 7px 1px;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: #ffffff;
    background: #8baa36;
    border-radius: 100px;
    flex: none;

    @media screen and (min-width: 768px) {
      padding: 0.5px 7px 2.5px;
      font-size: 14px;
      line-height: 21px;
    }
  }

  & p {
    padding-top: 2px;
    color: ${({ theme }) => theme.colors.mainBlack};
    width: 311px;
    @media screen and (min-width: 768px) {
      width: 660px;
    }

    @media screen and (min-width: 1440px) {
      width: 433px;
    }
  }
`;

export const ImageWrapper = styled.div`
  & img {
    border-radius: 8px;
    width: 100%;
    height: 219px;
    object-fit: cover;

    @media screen and (min-width: 768px) {
      height: 332px;
    }

    @media screen and (min-width: 1440px) {
      width: 664px;
    }
  }
`;
