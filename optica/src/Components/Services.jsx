import servicesIcon from "../assets/services/servicios-icono.png"
import productsIcon from "../assets/services/productos-icono.png"
import sucursalIcon from "../assets/services/sucursal-icono.png"


const Services = () => {
  return (
<div className='mt-5'>
<div className="container intro-section">
      <section className="page-section" id="services">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Services</h2>
            <h3 className="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <img src={productsIcon} width={100} className="" alt="" />
               </span>
              <h4 className="my-3">Productos</h4>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
              <img src={servicesIcon} width={100} className="" alt="" />
              </span>
              <h4 className="my-3">Servicios</h4>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
              <img src={sucursalIcon} width={100} className="" alt="" />
              </span>
              <h4 className="my-3">Sucursales</h4>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
</div>

  )
}

export default Services