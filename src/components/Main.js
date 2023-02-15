import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import Carrito from './Carrito'
import { Route, Routes } from 'react-router-dom';

const Main=()=>{
  return (

      <main id='main'>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/productos/:category' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/carrito' element={<Carrito/>}/>
        </Routes>
      </main>
  
  );
}

export default Main;