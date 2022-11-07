import React from 'react';


const Categories = (props) => {
  const {ktg, filter} = props;

  return (
    <div className='btn-container'>
      {ktg.map((k,index)=>{
        return (
          <button className='filter-btn' onClick={()=>filter(k)} key={index} >
            {k}
          </button>
        )
      })}
    </div>
  );
};

export default Categories;

