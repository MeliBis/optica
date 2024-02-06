import { Link } from "react-router-dom";

const Section3Testimonials = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-center m-auto">
          <h2 className="h2-testimonials">Testimonios</h2>
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            {/* Carousel */}
            <div className="carousel-inner">
              <div className="item carousel-item active">
                <div className="img-box">
                  <img src="https://i.ibb.co/d5DY64w/img1.jpg"  />
                </div>
                <p className="testimonial">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  eu sem tempor, varius quam at, luctus dui. Mauris magna metus,
                  dapibus nec turpis vel, semper malesuada ante. Idac bibendum
                  scelerisque non non purus. Suspendisse varius nibh non
                  aliquet.
                </p>
                <p className="overview">
                  <b>Jennifer Smith</b>, Zacatlán, Puebla
                </p>
              </div>
              <div className="item carousel-item">
                <div className="img-box">
                  <img src="https://i.ibb.co/5FF1vqz/img2.jpg"  />
                </div>
                <p className="testimonial">
                  Vestibulum quis quam ut magna consequat faucibus. Pellentesque
                  eget nisi a mi suscipit tincidunt. Utmtc tempus dictum risus.
                  Pellentesque viverra sagittis quam at mattis. Suspendisse
                  potenti. Aliquam sit amet gravida nibh, facilisis gravida
                  odio.
                </p>
                <p className="overview">
                  <b>Dauglas McNun</b>, Financial Advisor
                </p>
              </div>
              <div className="item carousel-item">
                <div className="img-box">
                  <img src="https://i.ibb.co/Trv7hDv/img3.jpg"  />
                </div>
                <p className="testimonial">
                  Phasellus vitae suscipit justo. Mauris pharetra feugiat ante
                  id lacinia. Etiam faucibus mauris id tempor egestas. Duis
                  luctus turpis at accumsan tincidunt. Phasellus risus risus,
                  volutpat vel tellus ac, tincidunt fringilla massa. Etiam
                  hendrerit dolor eget rutrum.
                </p>
                <p className="overview">
                  <b>Hellen Wright</b>, Athelete
                </p>
              </div>
            </div>
            {/* Carousel Controls */}
            <Link
              className="carousel-control left carousel-control-prev"
              to="#myCarousel"
              data-slide="prev"
            >
             <i className="fa-solid fa-arrow-left"/>
            </Link>
            <a
              className="carousel-control right carousel-control-next"
              href="#myCarousel"
              data-slide="next"
            >
             <i className="fa-solid fa-arrow-right"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3Testimonials;
