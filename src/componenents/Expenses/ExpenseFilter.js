import React, { useState} from 'react';

import './ExpenseFilter.css';

const ExpensesFilter = (prop) => {

    const yearChange = (e) => {
        // console.log(e.target.value)
        prop.onFilteredYear(e.target.value)
    }


  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={yearChange}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;