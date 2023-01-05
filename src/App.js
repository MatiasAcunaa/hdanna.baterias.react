import Navbar from './components/Navbar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';

const App=()=>{
  return (
    <>
      <header className="App-header">
        <Navbar/>
      </header>
      <ItemListContainer greeting="Hola profe"/>
    </>
  );
}

export default App;
