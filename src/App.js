import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';

const App=()=>{
  return (
    <>
      <BrowserRouter>
        <Header/>
        <br />
        <Main/>
        <br />
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
