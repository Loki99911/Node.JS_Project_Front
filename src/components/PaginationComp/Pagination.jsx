import { Pagination } from '@mui/material';
import { PaginationWrapper } from './Pagination.styled';

export const PaginationComp = ({ count, page, handleChange }) => {
  return (
    <PaginationWrapper>
      <Pagination
        count={count}
        page={page}
        onChange={handleChange}
      />
    </PaginationWrapper>
  );
};
