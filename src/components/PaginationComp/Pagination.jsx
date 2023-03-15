import { Pagination } from '@mui/material';
import { PaginationWrapper } from './Pagination.styled';

export const PaginationComp = ({ count, page, handleChange }) => {
  return (
    <PaginationWrapper>
      <Pagination
        siblingCount={0}
        count={count}
        page={page}
        onChange={handleChange}
      />
    </PaginationWrapper>
  );
};
