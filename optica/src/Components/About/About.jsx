import { Link } from "react-router-dom";
import imgAbout from '../../assets/about/anali.jpg'


const About = () => {
  return (
    <main className="flex-shrink-0">
      {/* Navigation*/}
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
        <div className="container px-5">

        </div>
      </nav>
      {/* Header*/}
      <header className="py-5">
        <div className="container px-5 pb-5">
          <div className="row gx-5 align-items-center">
            <div className="col-xxl-5">
              {/* Header text content*/}
              <div className="text-center text-xxl-start">
                <div className="badge bg-gradient-primary-to-secondary text-white mb-4">
              
                </div>
                <div className="fs-3 fw-light text-muted">
                Ve más allá, ve mejor
                </div>
                <h1 className="display-3 fw-bolder mb-5">
                  <span className="text-gradient d-inline">
                    Hola, soy la doctora Analí Cerecedo
                  </span>
                </h1>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                  <p className="text-center">
                    Educación, Universidad, diplomas/certificados
                   </p>
 
                </div>
              </div>
            </div>
            <div className="col-xxl-7">
              {/* Header profile picture*/}
              <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                <div className="profile bg-gradient-primary-to-secondary">
                  {/* TIP: For best results, use a photo with a transparent background like the demo example below*/}
                  {/* Watch a tutorial on how to do this on YouTube (link)*/}
                  <img
                    className="profile-img img-fluid"
                    src={imgAbout}
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* About Section*/}
      <section className="bg-light py-5">
        <div className="container px-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-xxl-8">
              <div className="text-center my-5">
                <h2 className="display-5 fw-bolder">
                  <span className="text-gradient d-inline">Sobre mí</span>
                </h2>
                <p className="lead fw-light mb-4">
                  Doctora Anlí Cerecedo
                </p>
                <p className="text-muted">
                Soy una optometrista apasionada por la salud visual. Cuenta con 10 años de experiencia en el campo, y se dedica a brindar a sus pacientes una atención personalizada y de alta calidad. Es especialista en la detección y tratamiento de problemas de visión, incluyendo errores refractivos (miopía, hipermetropía, astigmatismo), enfermedades oculares (glaucoma, cataratas, degeneración macular) y problemas de visión binocular. También ofrece terapia visual para mejorar la coordinación ojo-mano, la percepción espacial y otras habilidades visuales.                </p>
                <div className="d-flex justify-content-center fs-2 gap-4">
                  <Link className="text-gradient" to="#">
                    <i className="bi bi-twitter" />
                  </Link>
                  <Link className="text-gradient" to="#!">
                    <i className="bi bi-linkedin" />
                  </Link>
                  <Link className="text-gradient" to ="#">
                    <i className="bi bi-github" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
