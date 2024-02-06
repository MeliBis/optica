import Geolocalizacion from './Geolocalizacion'

const Contact = () => {
  return (
    <div className="container-1 ">
    <div className="background-page">
      <div className="container mt-5">
        <h2 className="text-center mb-5 pt-3">Opti Center</h2>
        <div className="details row text-center text-sm-start align-items-stretch pt-5 mb-5">
          <div className="title col col-12 col-md-3">
             <h2>Sucursal 1</h2> 
          </div>
          <div className="address col col-12 col-md-3">
            <h4 className="text-center"> <i className="fa-solid fa-building" /> Dirección</h4>
            <p className="text-center">calle no. </p>
            <p className="text-center text-secondary">referencias </p>
          </div>
       {/*    <div className="program col col-12 col-md-3">
            <h4 className="text-center"> <i className="fa-solid fa-users" /> Public relations office:</h4>
            <p className="text-center">Uping Street seen from Withsbrurck, 203</p>
          </div> */}
          <div className="contact-center col col-12 col-md-3">
            <h4 className="text-center"> <i className="fa-solid fa-phone" />Teléfono</h4>
            <p className="text-center"> 55-555-5555</p>
          </div>
        </div>
        <hr />
        <div className="details row text-center text-sm-start align-items-stretch pt-5 mb-5">
          <div className="title col col-12 col-md-3">
            <h2>Sucursal 2</h2>
          </div>
          <div className="address col col-12 col-md-3">
            <h4 className="text-center"> <i className="fa-solid fa-location-dot" /> Dirección</h4>
            <p className="text-center">Downing Street seen from Whitehall, 2013</p>
          </div>
          <div className="program col col-12 col-md-3">
            <h4 className="text-center"> <i className="fa-solid fa-calendar-days" /> Teléfono</h4>
            <p className="text-center">
              55-555-5555 <br />
            </p>
          </div>
          
        </div>
        <div className="d-flex justify-content-center  pb-5">

        <hr  />

      <Geolocalizacion/>
       </div>
      </div>
    </div>
  </div>
  )
}

export default Contact