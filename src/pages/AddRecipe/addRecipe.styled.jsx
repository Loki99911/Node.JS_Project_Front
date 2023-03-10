import { SocialLinksConteiner } from 'components/FooterComp/SocialLinks/SocialLinks.styled';
import styled from 'styled-components';

export const RecipeWrap = styled.form`
  width: 100%;
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
    overflow: hidden;
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

export const InputsWithSelectWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  .css-1hb7zxy-IndicatorsContainer {
    svg {
      fill: ${({ theme }) => theme.colors.mainAccent};
    }

    .css-1u9des2-indicatorSeparator {
      opacity: 0;
    }
  }
  .css-1fdsijx-ValueContainer {
    display: flex;
    flex-direction: row-reverse;
  }

  .css-13cymwt-control {
    border-style: unset;
    background-color: transparent;
    border-radius: 6px;
  }

  .css-b62m3t-container {
    width: 150px;
    position: absolute;
    top: 10%;
    right: 0;
  }

  input {
    caret-color: transparent;
  }
`;

export const IngredientsSection = styled.div`
  margin-top: 72px;

  .css-1hb7zxy-IndicatorsContainer {
    svg {
      fill: ${({ theme }) => theme.colors.mainAccent};
    }

    .css-1u9des2-indicatorSeparator {
      opacity: 0;
    }
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
    margin-top: 32px;
  }
`;

export const PopularSection = styled.div`
  margin-top: 72px;
  max-width: 320px;
`;

export const PopularRecipe = styled.div``;

export const IngredientsItem = styled.li`
  display: flex;
  align-items: center;
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
  width: 320px;

  p:nth-child(1) {
    font-weight: 500;
  }

  img {
    margin-right: 12px;
  }
`;

export const RecipeTitle = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights[1]};
  font-size: 16px;
  line-height: ${({ theme }) => theme.lineHeights.description};
  letter-spacing: ${({ theme }) => theme.letterSpacings.subheader};
`;

export const RecipeText = styled.p`
  margin-top: 3px;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 200px;
  height: 50px;
  color: ${({ theme }) => theme.colors.mainGrey};
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  font-size: 12px;
  line-height: ${({ theme }) => theme.lineHeights.content};
  letter-spacing: ${({ theme }) => theme.letterSpacings.subheader};
`;

export const RecepiImg = styled.img`
  border-radius: 8px;
  height: 85px;
  width: 100px;
`;

export const ButtonRemoveItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
`;

export const SocialLinksWrapper = styled.div`
  margin-bottom: 100px;

  ${SocialLinksConteiner} {
    justify-content: flex-start;
  }
`;
