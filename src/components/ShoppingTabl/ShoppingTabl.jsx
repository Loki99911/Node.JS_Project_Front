import {
  Table,
  TableHeaded,
  BoxForItemImage,
  ItemName,
  TableHeaderNameTitle,
  TableHeaderTitle,
  BoxForItemNumber,
  BoxForItemRemove,
} from './style.js';
import icons from 'images/sprite.svg';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getShoppingList } from 'redux/ingredients/ingredientsSelectors.js';
import {
  getShoppingIngredient,
  removeShoppingIngredient,
} from 'redux/ingredients/ingredientsOperations.js';

const ShopingTabl = () => {
  const dispatcher = useDispatch();
  const list = useSelector(getShoppingList);
  useEffect(() => {
    dispatcher(getShoppingIngredient());
  }, [dispatcher]);

  const deleteIngredient = e => {
    const id = e.target.parentNode.parentNode.id;
    dispatcher(removeShoppingIngredient(id));
  };

  return (
    <Table>
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
              <BoxForItemRemove onClick={deleteIngredient} id={elem._id}>
                <svg width="20" height="20">
                  <use href={icons + '#icon-cross'}></use>
                </svg>
              </BoxForItemRemove>
            </TableHeaderTitle>
          </TableHeaded>
        );
      })}
    </Table>
  );
};

export default ShopingTabl;
