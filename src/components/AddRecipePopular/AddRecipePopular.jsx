import { SocialLinks } from 'components/FooterComp/SocialLinks/SocialLinks';
import { SubTitle } from 'components/SubTitle/SubTitle';
import {
  PopularItem,
  PopularRecipe,
  PopularSection,
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

export const AddRecipePopular = ({ isDesktop, isTablet, localTheme }) => {
  const popularRecepis = useSelector(getPopular);

  const popularList = popularRecepis.map(
    ({ idMeal, strMealThumb, strInstructions, strMeal }) => (
      <SwiperSlide key={idMeal}>
        <PopularItem as={'div'}>
          <Link to={`/recipe/${idMeal}`}>
            <RecepiImg src={strMealThumb} alt={strMeal} />
            <div>
              <RecipeTitle>{strMeal}</RecipeTitle>
              <RecipeText>{strInstructions}</RecipeText>
            </div>
          </Link>
        </PopularItem>
      </SwiperSlide>
    )
  );
  return (
    <PopularSection isDesktop={isDesktop}>
      {isDesktop && (
        <SocialLinksWrapper localTheme={localTheme}>
          <SubTitle text="Follow us" />
          <SocialLinks />
        </SocialLinksWrapper>
      )}
      <PopularRecipe>
        <SubTitle text="Popular recipe" />
        <Swiper
          direction={isTablet ? 'horizontal' : 'vertical'}
          style={
            isTablet
              ? { padding: '20px 0' }
              : { height: '480px', width: '340px', padding: '10px 0' }
          }
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          centeredSlides={false}
          slidesPerView={isTablet ? 2 : 4}
          spaceBetween={isTablet ? 30 : 10}
          freeMode={true}
          modules={[FreeMode, Autoplay]}
        >
          {popularList}
        </Swiper>
      </PopularRecipe>
    </PopularSection>
  );
};
