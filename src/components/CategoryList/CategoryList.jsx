import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryList } from 'redux/outerRecipes/outerRecipesOperations';
import { getFullCategoryList } from 'redux/outerRecipes/outerRecipesSelectors';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


export const CategoryList = () => {
    const {categoryName:init} = useParams();
    const [categoryName] = useState (init);
     const dispatcher = useDispatch();
    const [value, setValue] = useState(1);

    const fullCategoryList = useSelector(getFullCategoryList);
    // console.log(init, fullCategoryList);
    
    
   
    useEffect(() => {
        dispatcher(getCategoryList());
    }, [dispatcher]);

useEffect (() => {
         if (fullCategoryList.length === 0) return;
         console.log(fullCategoryList);
         const newArray = fullCategoryList.map((e, index) => {if (index === 3){return "desserts"} return e});  
    const idx = newArray.findIndex(e =>{
            return e.toLowerCase() === categoryName});
        // console.log(idx);
        setValue(idx);
    }, [fullCategoryList, categoryName]);

  
    
    const navigate = useNavigate();
    const handleChange = (event, newValue) => {
        // console.log(event);
        setValue(newValue);
        navigate(`/categories/${event.target.textContent}`)
    };

   

    // console.log(event);
    const items = fullCategoryList.map(e => <Tab label={e.toLowerCase()} key={e} />)
    return (

        <Box sx={{ maxWidth: '100%', bgcolor: 'background.paper' }}>
            <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
                {items}

            </Tabs>
        </Box>
    );
}