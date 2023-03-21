import { CardMeal } from 'components/CardMeal/CardMeal';
import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getLimitedRecipesByCategory } from 'redux/outerRecipes/outerRecipesOperations';
import { getLimitedRecipes } from 'redux/outerRecipes/outerRecipesSelectors';
import { RowTable } from './CategoriesByName.styled';

const CategoriesByName = () => {
    const dispatch = useDispatch();
    const { categoryName } = useParams();
    const limitedRecipes = useSelector(getLimitedRecipes);
    const isPending = useSelector(state => state.outerRecipes.isCategoryFetching);


    useEffect(() => {
        const params = { category: categoryName, limit: 12 };
        if (categoryName === 'desserts') {
            dispatch(getLimitedRecipesByCategory({ category: 'dessert', limit: 12 }));
        } else {
            dispatch(getLimitedRecipesByCategory(params));
        }
    }, [dispatch, categoryName]);
    return isPending ? (
        <Loader />
    ) : (
        <RowTable>
            {limitedRecipes.slice(0, 8).map(meal => (
                <CardMeal meal={meal} key={meal.idMeal} />
            ))}
        </RowTable>
    );
};

export default CategoriesByName;
