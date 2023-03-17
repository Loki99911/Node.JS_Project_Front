import {
    BtnCategories,
    CardWrapper,
    CategoryItem,
    CategoryList,
    TitlePrew,
} from './PreviewCategories.styled';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContentForMain } from 'redux/outerRecipes/outerRecipesSelectors';
import { getMainCategories } from 'redux/outerRecipes/outerRecipesOperations';
import { useMediaQuery } from 'react-responsive';
import 'react-tooltip/dist/react-tooltip.css';
import { CardMeal } from 'components/CardMeal/CardMeal';
import { scrollToTop } from 'utils/scrollUp';




export const PreviewCategories = () => {
    const mainCategories = useSelector(getContentForMain);
    const dispatcher = useDispatch();
    const isDesktop = useMediaQuery({ minWidth: 1440 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });

    useEffect(() => {
        if (mainCategories !== null) return;
        dispatcher(getMainCategories());
    }, [dispatcher, mainCategories]);

    let numCard;
    if (isDesktop) {
        numCard = 4; // Десктоп
    } else if (isTablet) {
        numCard = 2; // Планшет
    } else {
        numCard = 1; // Мобильный
    }

    return (
        <CategoryList>
            {mainCategories &&
                Object.entries(mainCategories).map(([category, meals]) => (
                    <CategoryItem key={category}>
                        <TitlePrew>{category}</TitlePrew>
                        <CardWrapper>
                            {meals.slice(0, numCard).map(meal => (
                                <CardMeal key={meal.idMeal} meal={meal} />
                            ))}
                        </CardWrapper>
                        <BtnCategories to={`/categories/${category}`} onClick={scrollToTop}>
                            See all
                        </BtnCategories>
                    </CategoryItem>
                ))}
        </CategoryList>
    );
};
