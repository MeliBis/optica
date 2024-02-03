import React from 'react'

const About = () => {
  return (
    <div>
  <div className="title">
    <h3>Certificaciones</h3>
  </div>
  <div className="row">
    <div className="col-lg-4 m-15px-tb">
      <div className="feature-box-02 media align-items-center">
        <div className="icon">
          <img src="./" />
        </div>
        <div className="media-body">
          <h6>titulo</h6>
          <p>titulo 1</p>
        </div>
      </div>
    </div>
    <div className="col-lg-4 m-15px-tb">
      <div className="feature-box-02 media align-items-center">
        <div className="icon">
          <img src="./"  />
        </div>
        <div className="media-body">
          <h6>Diploma1</h6>
          <p>nombre</p>
        </div>
      </div>
    </div>
    <div className="col-lg-4 m-15px-tb">
      <div className="feature-box-02 media align-items-center">
        <div className="icon">
          <img src="./assets/codigof.jpg" title alt />
        </div>
        <div className="media-body">
          <h6>certificado 2</h6>
          <p>certificado</p>
        </div>
      </div>
    </div>
  </div>
  {/* separated */}
  <div className="separated" />
</div>

  )
}

export default About