import imgGaleria1 from '../../assets/gallery/1.jpg'
import imgGaleria2 from '../../assets/gallery/2.jpg'
import imgGaleria3 from '../../assets/gallery/3.jpg'
import imgGaleria4 from '../../assets/gallery/4.jpg'
import imgGaleria5 from '../../assets/gallery/5.jpg'
import imgGaleria6 from '../../assets/gallery/6.jpg'

const Section2Gallery = () => {
  return (
  <section className="page-section bg-light" id="portfolio">
  <div className="container">
    <div className="text-center">
      <h2 className="section-heading text-uppercase">Conoce lo más nuevo que cuida tu vista</h2>
      <h3 className="section-subheading text-muted">
        Cuída tus ojos, cuida tu futuro.</h3>
    </div>
    <div className="row">
      <div className="col-lg-4 col-sm-6 mb-4">
        {/* Portfolio item 1*/}
        <div className="portfolio-item">
          <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
            </div>
            <img className="img-fluid" src={imgGaleria1} alt="..." />
          </a>
          <div className="portfolio-caption">
            <div className="portfolio-caption-heading">Prueba</div>
            <div className="portfolio-caption-subheading text-muted">Lentes oftálmicos</div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 mb-4">
        {/* Portfolio item 2*/}
        <div className="portfolio-item">
          <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
            </div>
            <img className="img-fluid" src={imgGaleria1} alt="..." />
          </a>
          <div className="portfolio-caption">
            <div className="portfolio-caption-heading">Explora</div>
            <div className="portfolio-caption-subheading text-muted">lentes fotocromáticos </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 mb-4">
        {/* Portfolio item 3*/}
        <div className="portfolio-item">
          <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
            </div>
            <img className="img-fluid" src={imgGaleria1} alt="..." />
          </a>
          <div className="portfolio-caption">
            <div className="portfolio-caption-heading">Prueba</div>
            <div className="portfolio-caption-subheading text-muted">Lentes de sol</div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
        {/* Portfolio item 4*/}
        <div className="portfolio-item">
          <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal4">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
            </div>
            <img className="img-fluid" src={imgGaleria1} alt="..." />
          </a>
          <div className="portfolio-caption">
            <div className="portfolio-caption-heading">Prueba</div>
            <div className="portfolio-caption-subheading text-muted">Lentes de lectura</div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
        {/* Portfolio item 5*/}
        <div className="portfolio-item">
          <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal5">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
            </div>
            <img className="img-fluid" src={imgGaleria1} alt="..." />
          </a>
          <div className="portfolio-caption">
            <div className="portfolio-caption-heading">Southwest</div>
            <div className="portfolio-caption-subheading text-muted">Website Design</div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        {/* Portfolio item 6*/}
        <div className="portfolio-item">
          <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
            </div>
            <img className="img-fluid" src={imgGaleria1} alt="..." />
          </a>
          <div className="portfolio-caption">
            <div className="portfolio-caption-heading">Todo terreno</div>
            <div className="portfolio-caption-subheading text-muted">Lentes polarizados</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Section2Gallery;
