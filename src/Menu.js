import React from 'react';

const Menu = ({isi}) => {
  console.log(isi)

  return (
  <div className='section-center'>
    {isi.map((isiMenu=>{
      const {id,title,category,img,price,desc} = isiMenu;
      return (
        <article className='menu-item' key={id}>
          <img className='photo' src={img} alt={title} />
          <div className='item-info'>
            <header>
              <h4>{title}</h4>
              <h4 className='price'>${price}</h4>
            </header>
            <p className='item-text'>{desc}</p>
          </div>
        </article>
      );
    })
    )}
  </div>
  );
};

export default Menu;
