import { Link } from "react-router-dom";

const IntroSection1 = () => {
  return (
    <section className="page-section bg-primary p-5" >
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="text-white mt-0">Opti Center</h2>
            <hr className="divider divider-light" />
            <p className="text-white-75 mb-4 text-light">
              Todo lo que necesitas lo encontrarás en Opti Center
            </p>
            <Link to='/servicios'className="btn btn-light btn-xl" >
              Ver armazones
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection1;
