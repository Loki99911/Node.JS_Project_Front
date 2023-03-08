import styled from 'styled-components';

export const RecipeWrap = styled.div`
  h1,
  h2,
  h3,
  p,
  button {
    padding: 0;
    margin: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }

  .css-1hb7zxy-IndicatorsContainer {
    display: none;
  }

  * {
    box-sizing: border-box;
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
  align-items: center;
  margin-top: 72px;

  input {
    padding: 15px;
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

  button {
    margin-top: 18px;
    color: white;
    padding: 12px 0;
    background-color: black;
    outline: none;
    border: none;

    border-top-left-radius: 30px;
    border-top-right-radius: 80px;
    border-bottom-left-radius: 80px;
    border-bottom-right-radius: 30px;

    width: 130px;
    text-align: center;
  }
`;

export const PopularSection = styled.div`
  margin-top: 72px;
`;

export const IngredientsItem = styled.li`
  display: flex;

  button {
    margin-left: 20px;
  }
`;

export const IngredientsList = styled.li`
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
