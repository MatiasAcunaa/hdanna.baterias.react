import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import CustomProvider from './components/CustomProvider';
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from 'react-toastify';

const App=()=>{
  return (
    <>
      <CustomProvider>
        <BrowserRouter>
          <Header/>
          <Main/>
          <Footer/>
        </BrowserRouter>
        <ToastContainer/>
      </CustomProvider>
    </>
  );
}

export default App;
