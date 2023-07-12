"use client"
import React,{useState} from "react";
import PropTypes from "prop-types";

import _ from "lodash";

import Dropdown from "../Dropdown/Dropdown";
import paginationStyles from '../../styles/Pagination.module.scss'


const Pagination = ({ totalItems, pageSize, currentPage, onPageChange, setPageSize }) => {

  const options =[
    {value: 5, text: 5}, 
    {value: 10, text: 10}, 
  ] 
  const [selectedOption, setSelectedOption] = useState(options&&options[0].value);
  
  let pagesCount =  Math.ceil(totalItems / pageSize);
  // if (pagesCount === 1) return null;//this makes pagination not display nothing
  // Todo: handle if currentPage isLast page and user selects selcted option of 10 {redirect /home} 
  const pages = _.range(1, pagesCount + 1);

  const handleItemsLimitChange = (e)=>{
    setSelectedOption(e.target.value)
    setPageSize(e.target.value)
  }

  return (
    <section className={paginationStyles.pagination}>
      <ul className={paginationStyles.ul}>
        <button 
          onClick={() => onPageChange(currentPage - 1)}
          type="button" 
          disabled={currentPage  === 1}>
            Prev {"<"}
        </button>

        <button 
          onClick={() => onPageChange(currentPage + 1)}
          type="button" 
          disabled={pages.includes(currentPage + 1) === false}
          >
            Next {">"}
          </button>

      </ul>
      <Dropdown
          label="items per page: "
          selectedOption={selectedOption}
          onChange={handleItemsLimitChange}
          pageSize={pageSize}
          options={options}
      />
      </section>
  );
};

Pagination.propTypes = {
    totalItems: PropTypes.number,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    setCurrentPage:PropTypes.func
  };
  
  export default Pagination;