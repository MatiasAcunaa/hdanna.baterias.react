import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App=()=>{
  return (
    <>
      <Header/>
      <ItemListContainer greeting="Hola profe"/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
