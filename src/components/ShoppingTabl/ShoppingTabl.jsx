import icons from 'images/sprite.svg';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getShoppingList } from 'redux/ingredients/ingredientsSelectors.js';
import {
  getShoppingIngredient,
  removeShoppingIngredient,
} from 'redux/ingredients/ingredientsOperations.js';
import { EmptyPagePlug } from 'components/EmptyPagePlug/EmptyPagePlug.jsx';
import {
  Table,
  TableHeaded,
  BoxForItemImage,
  ItemName,
  TableHeaderNameTitle,
  TableHeaderTitle,
  BoxForItemNumber,
  BtnForItemRemove,
  BowForEmptyList,
} from './ShoppingTab_style.js';

const ShopingTabl = () => {
  const dispatcher = useDispatch();
  const list = useSelector(getShoppingList);
  useEffect(() => {
    dispatcher(getShoppingIngredient());
  }, [dispatcher]);

  const deleteIngredient = e => {
    if (e.target.parentNode.parentNode.id) {
      const id = e.target.parentNode.parentNode.id;
      dispatcher(removeShoppingIngredient(id));
    }
    if (e.target.parentNode.id) {
      const id = e.target.parentNode.id;
      dispatcher(removeShoppingIngredient(id));
    }
    if (e.target.id) {
      const id = e.target.id;
      dispatcher(removeShoppingIngredient(id));
    }
  };

  return (
    <>
      {list.length === 0 ? (
        <BowForEmptyList>
          <EmptyPagePlug text="Your shopping list is empty" />
        </BowForEmptyList>
      ) : (
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
                  <BtnForItemRemove
                    type="button"
                    id={elem._id}
                    onClick={deleteIngredient}
                  >
                    <svg width="20" height="20">
                      <use href={icons + '#icon-cross'}></use>
                    </svg>
                  </BtnForItemRemove>
                </TableHeaderTitle>
              </TableHeaded>
            );
          })}
        </Table>
      )}
    </>
  );
};

export default ShopingTabl;
