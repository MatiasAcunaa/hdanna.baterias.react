import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import ItemListContainer from './ItemListContainer';
import { Route, Routes } from 'react-router-dom';

const Main=()=>{
  return (

      <main id='main'>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/productos/:categoria' element={<ItemListContainer/>}/>
        </Routes>
      </main>
  
  );
}

export default Main;