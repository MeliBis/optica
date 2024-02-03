import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top mb-5">
      <div className="container">
        <Link className="navbar-brand me-auto" to="/">
          <img src='' alt="" width={50} height={50} />
        </Link>

        <div
          className="offcanvas offcanvas-end"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Name
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sobre-nosotros">
                  Sobre nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/servicios">
                  Servicios
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/productos">
                  Productos
                </Link>
                </li>
         
              <li className="nav-item">
                <Link className="nav-link" to="/contacto">
                  Contacto
                </Link>
              </li>

             
            </ul>
          </div>
        </div>
{/*         <Link to="" className="login-button">
          Login
        </Link> */}
        <button
          className="navbar-toggler pe-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </div>
    </nav>

    
  )
}

export default Navbar