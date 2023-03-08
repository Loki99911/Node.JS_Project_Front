import styled from 'styled-components';

export const RecipeWrap = styled.div`
  padding: 0 16px;

  @media (min-width: 768px) {
    padding: 0 32px;
  }

  @media (min-width: 1440px) {
    display: flex;
    gap: 120px;
  }

  .css-1hb7zxy-IndicatorsContainer {
    display: none;
  }
  .css-13cymwt-control {
    border-style: unset;
    background-color: #d9d9d9;
    border-radius: 6px;
  }
  .css-b62m3t-container {
    width: 194px;
    &:nth-child(2) {
      width: 85px;
      margin-left: 14px;
    }
  }
`;

export const IngredientsTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AddRecepiSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 72px;

  @media (min-width: 768px) {
    flex-direction: unset;
    gap: 32px;
  }

  input {
    padding: 15px 0;
  }

  label[id='labelFile'] {
    width: 280px;
    height: 270px;
    background-color: #8baa36;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: white;
  }

  input[type='file'] {
    width: 0;
    height: 0;
    opacity: 0;
    position: absolute;
    z-index: -1;
    display: block;
    padding: 0;
  }
`;

export const InputsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const IngredientsSection = styled.div`
  margin-top: 72px;
`;

export const RecepieSection = styled.div`
  margin-top: 72px;

  textarea {
    padding: 10px 16px;
    resize: none;
    background: #d9d9d9;
    border-radius: 6px;
    width: 100%;
    outline: none;
    border: none;
    margin-top: 24px;
    height: 155px;
    font-family: inherit;
  }
`;

export const PopularSection = styled.div`
  margin-top: 72px;
  max-width: 320px;
`;

export const IngredientsItem = styled.li`
  display: flex;

  button {
    margin-left: 20px;
  }
`;

export const IngredientsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const PupularList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
`;

export const PopularItem = styled.li`
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid #707070;

  p:nth-child(1) {
    font-weight: 500;
  }

  img {
    margin-right: 12px;
  }
`;