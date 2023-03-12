import {
  Table,
  TableHeaded,
  BoxForItemImage,
  ItemName,
  TableHeaderNameTitle,
  TableHeaderTitle,
  BoxForItemNumber,
  BoxForItemRemove,
} from './style';
import icons from '../../images/sprite.svg';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

const list = [{ _id: '22222', prod:"25" }, { _id: '4544', prod:"255" }];

const ShopingTabl = () => {
//    const dispatcher = useDispatch()

//     useEffect(() => {
//         dispatcher();
//     }, [dispatcher]);


  return (
    <>
      <Table>
        <TableHeaded>
          <TableHeaderNameTitle>Products</TableHeaderNameTitle>
          <TableHeaderTitle>Number</TableHeaderTitle>
          <TableHeaderTitle>Remove</TableHeaderTitle>
        </TableHeaded>
        {list.map(elem => {
          return (
            <TableHeaded key={elem._id}>
              <TableHeaderNameTitle>
                <BoxForItemImage>
            <img src={elem.prod} alt="product"/>
                </BoxForItemImage>
                <ItemName>{elem.prod}</ItemName>
              </TableHeaderNameTitle>
              <TableHeaderTitle>
                <BoxForItemNumber>{elem.prod}</BoxForItemNumber>
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
    </>
  );
};

export default ShopingTabl;
