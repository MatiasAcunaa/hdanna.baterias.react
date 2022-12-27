import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Navbar=()=>{
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light" id='barraNavegacion'>
        <div class="container-fluid">
          <a class="navbar-brand" href="#">H. Danna baterias y radiadores</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse d-flex flex-row-reverse bd-highlight" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#">Inicio</a>
              <a class="nav-link" href="#">Productos</a>
              <a class="nav-link" href="#">Servicios</a>
              <a class="nav-link" href="#">Carrito</a>
              <a class="nav-link" href="#">Contacto</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
