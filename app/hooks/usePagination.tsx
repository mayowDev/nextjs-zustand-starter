import Cookies from 'js-cookie'
import {  useState } from "react";
export const usePagination = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(5)

  return { currentPage, pageSize, setCurrentPage, setPageSize };
};