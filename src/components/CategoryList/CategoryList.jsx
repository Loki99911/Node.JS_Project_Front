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
  const { categoryName } = useParams();
  const dispatcher = useDispatch();
  const [value, setValue] = useState(1);
  const [mapArray, setMapArray] = useState([]);
  const navigate = useNavigate();

  const fullCategoryList = useSelector(getFullCategoryList);

  useEffect(() => {
    dispatcher(getCategoryList());
  }, [dispatcher]);

  useEffect(() => {
    if (fullCategoryList.length === 0) return;

    const newArray = fullCategoryList.map((e, index) => {
      if (index === 3) {
        return 'desserts';
      }
      return e;
    });

    setMapArray(prev => [...prev, ...newArray]);

    const idx = newArray.findIndex(e => {
      return e.toLowerCase() === categoryName;
    });

    if (idx !== -1) {
      setValue(idx);
    }
  }, [fullCategoryList, categoryName]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(`/categories/${event.target.textContent}`);
  };

  const items = mapArray.map((e, index) => (
      <Tab style={{textTransform:"capitalize"}} label={e.toLowerCase()} key={index} />
  ));

  return (
    <Box sx={{ maxWidth: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        {items}
      </Tabs>
    </Box>
  );
};
