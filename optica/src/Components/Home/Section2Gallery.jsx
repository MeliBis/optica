import imgGaleria1 from '../../assets/gallery/1.jpg'
import imgGaleria2 from '../../assets/gallery/2.jpg'
import imgGaleria3 from '../../assets/gallery/3.jpg'
import imgGaleria4 from '../../assets/gallery/4.jpg'
import imgGaleria5 from '../../assets/gallery/5.jpg'
import imgGaleria6 from '../../assets/gallery/6.jpg'

const Section2Gallery = () => {
  return (
    <div className="container gallery-container">
      <div className="row">
        <div className="col-md-4">
          <img src={imgGaleria1} className="img-fluid" alt="Imagen 1" />
        </div>
        <div className="col-md-4">
          <img src={imgGaleria2} className="img-fluid" alt="Imagen 2" />
        </div>
        <div className="col-md-4">
          <img src={imgGaleria3} className="img-fluid" alt="Imagen 3" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <img src={imgGaleria4} className="img-fluid" alt="Imagen 4" />
        </div>
        <div className="col-md-4">
          <img src={imgGaleria1} className="img-fluid" alt="Imagen 5" />
        </div>
        <div className="col-md-4">
          <img src={imgGaleria6} className="img-fluid" alt="Imagen 6" />
        </div>
      </div>
    </div>
  );
};

export default Section2Gallery;
