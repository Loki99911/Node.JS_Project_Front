import styled from 'styled-components';

export const RecipeItem = styled.li`
    display: flex;
    align-items: center;
    /* padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 12px;
    padding-right: 29px; */
    padding: 14px 29px 14px 14px;
    border-radius: ${li => li.theme.radii.image};
    background-color: ${li => li.theme.colors.secondaryAccent};

    @media screen and (min-width: 768px) {
    padding: 21px 58px 21px 28px;   
    }

    @media screen and (min-width: 1440px) {
    padding: 5px 70px 5px 36px;   
    }    
`

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px; 

    @media screen and (min-width: 768px) {
    margin-right: 24px; 
    }

    @media screen and (min-width: 1440px) {
    margin-right: 40px;
    }  

  & img {
    border-radius: ${p => p.theme.radii.image};
    width: 57px;
    height: 57px;

    @media screen and (min-width: 768px) {
      width: 136px;
      height: 136px;
    }

    @media screen and (min-width: 1440px) {
      width: 172px;
      height: 172px;
    }

  }
`;

export const Label = styled.label`
    margin-left: auto;
`
