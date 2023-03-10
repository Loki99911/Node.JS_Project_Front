import { Container } from "components/Container/Container";
import { ButtonOthCtg } from "components/ButtonOthCtg/ButtonOthCtg";
import { PreviewCategories } from "components/PreviewCategories/PreviewCategories";
import { SearchForm } from "components/SearchForm/SearchForm";
import { СhooseYourBreakfast } from "components/СhooseYourBreakfast/СhooseYourBreakfast"
import { ColorWrap, MainPageBg, MainPageH1, MainPageText, SpanGr } from "./MainPage.styled";


const MainPage = () => {
    return (
    <>
                <MainPageBg>
            <Container>
                    <MainPageH1><SpanGr>So</SpanGr>Yummy</MainPageH1>
                    <MainPageText>"What to cook?" is not only a recipe app, it is, in fact, your cookbook. You can add your own recipes to save them for the future.</MainPageText>
                    <СhooseYourBreakfast />
                    <SearchForm />
            </Container>
            </MainPageBg>
            <ColorWrap>
            <PreviewCategories/>
            <PreviewCategories/>
            <PreviewCategories/>
            </ColorWrap>
            <ButtonOthCtg/>

</>
    );
};

export default MainPage;

