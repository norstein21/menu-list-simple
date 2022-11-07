import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [daftarMenu,setDaftarMenu] = useState(items);
  const [kategori,setKategori] = useState([]);

  const filterKategori = (filter) =>{
    if(filter==='all'){
      setDaftarMenu(items)
      return;
    }
    const newKategori = items.filter((i)=>i.category === filter)
    setDaftarMenu(newKategori);
  }

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Daftar Menu Fira</h2>
          <div className='underline'></div>
        </div>
        <Categories filter={filterKategori} />
        <Menu isi={daftarMenu} />
      </section>
    </main>
  );
}

export default App;
