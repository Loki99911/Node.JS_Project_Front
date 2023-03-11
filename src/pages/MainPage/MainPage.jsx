import { ButtonOthCtg } from "components/ButtonOthCtg/ButtonOthCtg";
import { Container } from "components/Container/Container";
import { PreviewCategories } from "components/PreviewCategories/PreviewCategories";
import { SearchForm } from "components/SearchForm/SearchForm";
import { СhooseYourBreakfast } from "components/СhooseYourBreakfast/СhooseYourBreakfast"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { getMainCategories } from "redux/outerRecipes/outerRecipesOperations";
import { getContentForMain } from "redux/outerRecipes/outerRecipesSelectors";
import { ColorWrap, MainPageBg, MainPageDiv, MainPageH1, MainPageText, SpanGr } from "./MainPage.styled";

const MainPage = () => {
    const mainCategories = useSelector(getContentForMain);
    const dispatcher = useDispatch();
    const [numCards, setNumCards] = useState(2);
    const isDesktop = useMediaQuery({ minWidth: 1440 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 })
    const isMobile = useMediaQuery({ minWidth: 375, maxWidth: 767 })


    useEffect(() => {
        if (mainCategories !== null) return;
        dispatcher(getMainCategories());

        const handleResize = () => {
            if (isDesktop) {
                setNumCards(4);
            } else if (isTablet) {
                setNumCards(2);
            } else {
                setNumCards(1);
            }
        };
        handleResize();

    }, [dispatcher, mainCategories, isDesktop, isTablet]);
    const { breakfast, desserts, miscellaneous, vegan } = mainCategories;
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
        <ColorWrap>
            <PreviewCategories list={breakfast} />
            <PreviewCategories list={miscellaneous} />
            <PreviewCategories list={vegan} />
            <PreviewCategories list={desserts} />
        </ColorWrap>
        <ButtonOthCtg />

    </>)

};




export default MainPage;

