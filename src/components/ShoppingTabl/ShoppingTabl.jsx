import {
  Table,
  TableHeaded,
  BoxForItemImage,
  ItemName,
  TableHeaderNameTitle,
  TableHeaderTitle,
  BoxForItemNumber,
  BoxForItemRemove,
  BowForEmptyList
} from './style.js';
import icons from 'images/sprite.svg';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getShoppingList } from 'redux/ingredients/ingredientsSelectors.js';
import {
  getShoppingIngredient,
  removeShoppingIngredient,
} from 'redux/ingredients/ingredientsOperations.js';
import { EmptyPagePlug } from 'components/EmptyPagePlug/EmptyPagePlug.jsx';

const ShopingTabl = () => {
  const dispatcher = useDispatch();
  const list = useSelector(getShoppingList);
  useEffect(() => {
    dispatcher(getShoppingIngredient());
  }, [dispatcher, list]);

  const deleteIngredient = e => {
    const id = e.target.parentNode.id;
    dispatcher(removeShoppingIngredient(id));
  };

  return (<>{
      list.length === 0 ? (<BowForEmptyList><EmptyPagePlug text='Your shopping list is empty' /></BowForEmptyList>) :
        (<Table>
      <TableHeaded key="123654789">
        <TableHeaderNameTitle>Products</TableHeaderNameTitle>
        <TableHeaderTitle>Number</TableHeaderTitle>
        <TableHeaderTitle>Remove</TableHeaderTitle>
      </TableHeaded>
      {list.map(elem => {
        return (
          <TableHeaded key={elem._id}>
            <TableHeaderNameTitle>
              <BoxForItemImage>
                <img src={elem.image} alt="product" />
              </BoxForItemImage>
              <ItemName>{elem.strIngredient}</ItemName>
            </TableHeaderNameTitle>
            <TableHeaderTitle>
              <BoxForItemNumber>{elem.weight}</BoxForItemNumber>
            </TableHeaderTitle>
            <TableHeaderTitle>
              <BoxForItemRemove>
                <svg width="20" height="20" onClick={deleteIngredient} id={elem._id}>
                  <use href={icons + '#icon-cross'}></use>
                </svg>
              </BoxForItemRemove>
            </TableHeaderTitle>
          </TableHeaded>
        );
      })}
    </Table>)
  }</>
  );
};

export default ShopingTabl;
