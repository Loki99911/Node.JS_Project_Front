import { SocialLinks } from 'components/FooterComp/SocialLinks/SocialLinks';
import { SubTitle } from 'components/SubTitle/SubTitle';
import {
  PopularItem,
  PopularRecipe,
  PopularSection,
  PupularList,
  RecepiImg,
  RecipeText,
  RecipeTitle,
  SocialLinksWrapper,
} from 'pages/AddRecipe/addRecipe.styled';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPopular } from 'redux/outerRecipes/outerRecipesSelectors';
import { Autoplay, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export const AddRecipePopular = ({ isDesktop, isTablet }) => {
  const popularRecepis = useSelector(getPopular);
  console.log(popularRecepis);

  const popularList = tag =>
    popularRecepis.map(({ idMeal, strMealThumb, strInstructions, strMeal }) => (
      <SwiperSlide key={idMeal}>
        <PopularItem as={tag}>
          <Link to={`/categories/${idMeal}`}>
            <RecepiImg src={strMealThumb} alt={strMeal} />
            <div>
              <RecipeTitle>{strMeal}</RecipeTitle>
              <RecipeText>{strInstructions}</RecipeText>
            </div>
          </Link>
        </PopularItem>
      </SwiperSlide>
    ));
  return (
    <PopularSection isDesktop={isDesktop}>
      {isDesktop && (
        <SocialLinksWrapper>
          <SubTitle text="Follow us" />
          <SocialLinks />
        </SocialLinksWrapper>
      )}
      <PopularRecipe>
        <SubTitle text="Popular recipe" />

        {isTablet && (
          <Swiper
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            centeredSlides={false}
            slidesPerView={2}
            spaceBetween={32}
            freeMode={true}
            modules={[FreeMode, Autoplay]}
            style={{ padding: '20px 0' }}
          >
            {popularList('div')}
          </Swiper>
        )}

        {!isTablet && (
          <PupularList>{popularList('li').slice(0, 4)}</PupularList>
        )}
      </PopularRecipe>
    </PopularSection>
  );
};
