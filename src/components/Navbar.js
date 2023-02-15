import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../App.css';
import CartWidget from './CartWidget'

const Navbar=()=>{

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light' id='barraNavegacion'>
        <div className='container-fluid'>
          <Link className='navbar-brand mt-2 mb-2' to='/'><h4>H Danna baterias y radiadores</h4></Link>
          <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse d-flex flex-row-reverse bd-highlight' id="navbarNavAltMarkup">
            <div className='navbar-nav'>
              <Link className='nav-link active' aria-current="page" to="/productos/baterias">Baterias</Link>
              <Link className='nav-link' to="/productos/radiadores">Radiadores</Link>
              <Link className='nav-link' to="/carrito"><CartWidget></CartWidget></Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;