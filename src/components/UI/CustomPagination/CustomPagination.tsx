import { FC, useState } from "react";
import Pagination from "react-js-pagination";

import { Styled } from "./styles";

type CustomPaginationProps = {
  lastPage: number;
  maxLength: number;
  onPageChange: (value: number) => void;
};

export const CustomPagination: FC<CustomPaginationProps> = ({ onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber: number) => {
    onPageChange(pageNumber);
    setCurrentPage(pageNumber);
  };

  return (
    <Styled.PaginationContainer>
      <Pagination
        activePage={currentPage}
        itemsCountPerPage={10}
        totalItemsCount={450}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
        hideNavigation
      />
    </Styled.PaginationContainer>
  );
};
