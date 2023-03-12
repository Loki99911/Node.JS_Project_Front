import {
  Table,
  TableHeaded,
  BoxForItemImage,
  ItemName,
  TableHeaderNameTitle,
    TableHeaderTitle,
    BoxForItemNumber,
  BoxForItemRemove
} from './style';

const list = [{ _id: '22222' }, { _id: '4544' }];

const ShopingTabl = () => {
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
                <BoxForItemImage />
                <ItemName>{(elem.prod = 'hhhh')}</ItemName>
              </TableHeaderNameTitle>
                  <TableHeaderTitle>
                      <BoxForItemNumber>elem</BoxForItemNumber>
                </TableHeaderTitle>
                  <TableHeaderTitle>
                      <BoxForItemRemove>svg</BoxForItemRemove>
                  </TableHeaderTitle>
            </TableHeaded>
          );
        })}
      </Table>
    </>
  );
};

export default ShopingTabl;
