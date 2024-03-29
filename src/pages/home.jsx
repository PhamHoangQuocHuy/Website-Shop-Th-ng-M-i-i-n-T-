import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/hero';
import Slide1 from '../assets/images/slide1.jpg';
import Slide2 from '../assets/images/slide2.jpg';
import Slide3 from '../assets/images/slide3.jpg';
import Slide4 from '../assets/images/slide4.jpg';
import Slide5 from '../assets/images/slide5.jpg';
import Slide6 from '../assets/images/slide6.jpg';
import FeaturedProducts from '../components/featuredProducts';
import NewArrival from '../components/newArrival';
import Deal1 from '../assets/images/deal1.jpg'
import Deal2 from '../assets/images/deal2.jpg'
import Blogs from '../components/blogs'

const CountdownTimer = ({ initialHours = 0, initialMinutes = 0, initialSeconds = 0 }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds,
  });

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newTime = { ...prevTime };
        if (prevTime.seconds > 0) {
          newTime.seconds--;
        } else {
          if (prevTime.minutes > 0) {
            newTime.minutes--;
            newTime.seconds = 59;
          } else {
            if (prevTime.hours > 0) {
              newTime.hours--;
              newTime.minutes = 59;
              newTime.seconds = 59;
            } else {
              clearInterval(timerId);
            }
          }
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className='countdown-timer'>
      <div className='time-segment'>
        <span>{String(timeLeft.hours).padStart(2, '0')}</span>
      </div>
      <span className="separator">:</span>
      <div className='time-segment'>
        <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
      </div>
      <span className="separator">:</span>
      <div className='time-segment'>
        <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
      </div>
    </div>
  );
}; // code bộ đếm thời gian

const images = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6];

const Home = () => {
  // code chuyển slide banner
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  useEffect(() => {
    if (!isPaused) {
      const timer = setTimeout(() => {
        nextImage();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [currentImageIndex, isPaused]);

  const handleMouseOver = (index) => {
    setIsPaused(true);
    setCurrentImageIndex(index);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <>
      <section className='banner p-5'>
        <div className="container-xxl">
          <div className="row">
            <div className="banner-details d-flex flex-column align-items-center justify-content-center" onMouseLeave={handleMouseLeave}>
              <Link to={'/shop'}>
                <img src={images[currentImageIndex]} alt='' style={{ width: '100%' }} />
              </Link>
            </div>
            <div className="banner-radio-buttons d-flex justify-content-center mt-3">
              {images.map((_, index) => (
                <label key={index} style={{ margin: '0 5px' }} onMouseOver={() => handleMouseOver(index)}>
                  <input
                    type="radio"
                    name="banner-radio"
                    checked={currentImageIndex === index}
                  />
                </label>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Hero />

      <section className='featured-products p-5 mb-5'>
        <div className="container-xxl">
          <div className="row">
            <div className="text-center">
              <h1>Flash Sale</h1>
              <p className='count-down'>
                <CountdownTimer initialHours={2} initialMinutes={40} initialSeconds={38} />
              </p>
            </div>
            <FeaturedProducts />
          </div>
        </div>
      </section>

      <section className='repair'>
        <div className="container-xxl">
          <div className="row">
            <div className="repair-details d-flex flex-column text-center align-items-center p-3">
              <span className='text-white mt-1'>Repair service</span>
              <h2 className='text-white'>On <span className='text-success'><b>70%</b></span> Off on all Product Anh Accessories</h2>
              <div className="mt-3">
                <button className='button-repair'>Explore Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='new-products p-5'>
        <div className="container-xxl">
          <div className="row">
            <div className="text-center">
              <h1>New Arrivals</h1>
              <p>Your Best Designer  Outfits</p>
            </div>
            <NewArrival />
          </div>
        </div>
      </section>

      <section className="deals p-5">
        <div className="container-xxl">
          <div className="row">
            {/* Deal 1 */}
            <div className="col-6 p-4">
              <div className="card">
                <div className="d-flex">
                  <div className="col-md-4">
                    <img src={Deal1} alt="" className='img-fluid rounded-start h-100 p-2' />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <span>Hot Deals</span>
                      <h3>Buy 1 Get 1 FREE</h3>
                      <p>The latest best collection in our closet Feel Cute with our outfits</p>
                      <button className="button-deals mt-3">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Deal 2 */}
            <div className="col-6 p-4">
              <div className="card">
                <div className="d-flex">
                  <div className="col-md-4">
                    <img src={Deal2} alt="" className='img-fluid rounded-start h-100 p-2' />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <span>Hot Deals</span>
                      <h3>Buy 1 Get 1 FREE</h3>
                      <p>The latest best collection in our closet Feel Cute with our outfits</p>
                      <button className="button-deals mt-3">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='blogs p-3 mb-2'>
        <div className="container-xxl">
          <div className="row">
            <div className="text-center mb-4">
              <h1>What our customer say</h1>
              <p>Our customers never miss a bit on  providing feedback</p>
            </div>
            <Blogs />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
