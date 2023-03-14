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
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

const list = [{ id: '22222', strIngredient:"25", weight:"22", image:"url" }, { id: '4544', strIngredient:"255", weight:"22" }];

const ShopingTabl = () => {
//    const dispatcher = useDispatch()

//     useEffect(() => {
//         dispatcher();
//     }, [dispatcher]);

  return (
      <Table>
        <TableHeaded>
          <TableHeaderNameTitle>Products</TableHeaderNameTitle>
          <TableHeaderTitle>Number</TableHeaderTitle>
          <TableHeaderTitle>Remove</TableHeaderTitle>
        </TableHeaded>
        {list.map(elem => {
          return (
            <TableHeaded key={elem.id}>
              <TableHeaderNameTitle>
                <BoxForItemImage>
            <img src={elem.image} alt="product"/>
                </BoxForItemImage>
                <ItemName>{elem.strIngredient}</ItemName>
              </TableHeaderNameTitle>
              <TableHeaderTitle>
                <BoxForItemNumber>{elem.weight}</BoxForItemNumber>
              </TableHeaderTitle>
              <TableHeaderTitle>
                <BoxForItemRemove onClick={()=>"jjj"}>
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
