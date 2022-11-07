import React from 'react';

const Categories = ({filter}) => {
  return (
  <div className='btn-container'>
    <button className='filter-btn' onClick={()=>filter('all')}>All</button>
    <button className='filter-btn' onClick={()=>filter('breakfast')}>Breakfast</button>
    <button className='filter-btn' onClick={()=>filter('lunch')}>Lunch</button>
    <button className='filter-btn' onClick={()=>filter('shakes')}>Shakes</button>
  </div>
  );
};

export default Categories;
