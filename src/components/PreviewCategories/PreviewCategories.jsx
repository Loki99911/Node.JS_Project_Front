
import { BtnCategories, CardDish, CardImg, CardTitle, CardWrapper,  CategoryItem,  CategoryList,  TitlePrew } from "./PreviewCategories.styled";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NoImage from '../../images/default.jpg';
import { getContentForMain } from "redux/outerRecipes/outerRecipesSelectors";
import { getMainCategories } from "redux/outerRecipes/outerRecipesOperations";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip';



export const PreviewCategories = () => {

    const mainCategories = useSelector(getContentForMain);
    const dispatcher = useDispatch();
    const isDesktop = useMediaQuery({ minWidth: 1440 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 })
    
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
              {meals.slice(0, numCard).map((meal) => (
                
                <CardDish key={meal.idMeal}>
                    <Link to={`/recipe/${meal.idMeal}`}>
                  <CardImg
                    src={meal.strMealThumb ? meal.strMealThumb : {NoImage}}
                    alt={meal.strMeal}
                  />
                  
                  <CardTitle data-tooltip-id={meal.idMeal}>{meal.strMeal}
                   </CardTitle>
                   {meal.strMeal.length>30 && <Tooltip
               id={meal.idMeal} 
            //   anchorSelect={meal.idMeal}
              content={meal.strMeal}
              place="bottom"
              noArrow="false"
            //   slyle={{marginTop: "100px", zIndex: "99"}}
            />}
                  
                </Link>
                </CardDish>
              ))}
            </CardWrapper>
                
            <BtnCategories to='/categories'>See all</BtnCategories>
                
          </CategoryItem>
        ))} 
    </CategoryList>
  );
};











//   return (
//     <div>
   
// {mainCategories &&
//         Object.entries(mainCategories).map(([category, meals]) => (
//          <CardWrapper>
//           <div key={category}>
//             <h2>{category}</h2>
//             <div style={{ display: 'flex', gap: '20px' }}>
//               {meals.slice(0, numCards).map((meal) => (
//                {/* {list.map((meal) => { */}
//                 {/* <TitlePrew>{meal}</TitlePrew> */}
                
//                 return  (
//                 <CardDish key={meal.idMeal}>
//                   <CardImg
//                     src={meal.strMealThumb ? meal.strMealThumb : {NoImage}}
//                     alt={meal.strMeal}
//                   />
//                   <CardTitle>{meal.strMeal}</CardTitle>
//                 </CardDish>
//               )})}
//               <BtnCategories>See all</BtnCategories>
    
//     </div>
//    </CardWrapper>
//   )
// };

