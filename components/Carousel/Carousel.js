import Image from 'next/image';
import PropTypes from 'prop-types';
import styles from './carousel.module.css';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Carousel = ({ carouselInfo }) => {
  return (
    <>
      <div id="carouselIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {
            carouselInfo.map((info, index) => (
              <button type="button" key={index} data-bs-target="#carouselIndicators" data-bs-slide-to={index} className={index === 0 ? 'active' : undefined} aria-current="true" aria-label={`Slide ${index + 1}`} />
            ))
          }
        </div>
        <div className="carousel-inner">
          {
            carouselInfo.map((info, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : undefined}`} key={index}>
                <div className='vw-100 h-100 position-absolute d-flex justify-content-center align-items-center text-uppercase'>
                  <h3 className={styles.title}>{info.title}</h3>
                </div>
                <Image src={info.src} width={1499} height={900} layout="responsive" alt={info.alt} quality={100} loading="lazy" />
              </div>
            ))
          }
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

Carousel.propTypes = {
  carouselInfo: PropTypes.array.isRequired,
};

export default Carousel;
