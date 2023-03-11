import { click } from "@testing-library/user-event/dist/click";
import { ButtonOthCtg } from "components/ButtonOthCtg/ButtonOthCtg";
import { ButtonOthCtgWrap } from "components/ButtonOthCtg/ButtonOthCtg.styled";
import { ButtonSkew } from "components/ButtonSkew/ButtonSkew";
import { Container } from "components/Container/Container";
import { PreviewCategories } from "components/PreviewCategories/PreviewCategories";
import { SearchForm } from "components/SearchForm/SearchForm";
import { СhooseYourBreakfast } from "components/СhooseYourBreakfast/СhooseYourBreakfast"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { getMainCategories } from "redux/outerRecipes/outerRecipesOperations";
import { getContentForMain } from "redux/outerRecipes/outerRecipesSelectors";
import { ColorWrap, MainPageBg, MainPageDiv, MainPageH1, MainPageText, SpanGr } from "./MainPage.styled";

const MainPage = () => {
const navigate = useNavigate()
const onClick = (e) => {
    
    navigate ('/categories')
}


    return (<>
        
            <MainPageBg>
            <Container>
                <MainPageDiv>
                    <MainPageH1><SpanGr>So</SpanGr>Yummy</MainPageH1>
                    <MainPageText>"What to cook?" is not only a recipe app, it is, in fact, your cookbook. You can add your own recipes to save them for the future.</MainPageText>
                    <СhooseYourBreakfast />
                    <SearchForm />
                </MainPageDiv>
            </Container>
            </MainPageBg>
          <Container>
                <PreviewCategories />
          {/* <ButtonOthCtg /> */}
          <ButtonOthCtgWrap>
<ButtonSkew type={'click'} fn={onClick} styled={'other'} text={'Other categories'}/>
          </ButtonOthCtgWrap>
          
            
        </Container>
    </>)

};




export default MainPage;

