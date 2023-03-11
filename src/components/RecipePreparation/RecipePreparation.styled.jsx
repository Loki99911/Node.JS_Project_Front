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
  color: #3e4462;
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    letter-spacing: -0.24px;
  }
`;

export const InstructionText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  color: rgba(0, 0, 0, 0.8);

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
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
