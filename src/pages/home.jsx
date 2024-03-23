import React, { useState, useEffect } from 'react';
import Slide1 from '../assets/images/slide1.jpg';
import Slide2 from '../assets/images/slide2.jpg';
import Slide3 from '../assets/images/slide3.jpg';
import Slide4 from '../assets/images/slide4.jpg';
import Slide5 from '../assets/images/slide5.jpg';
import Slide6 from '../assets/images/slide6.jpg';

const images = [Slide1, Slide2, Slide3, Slide4,Slide5,Slide6];

const Home = () => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };
  useEffect(() => {
    // Chỉ bắt đầu tự chuyển slide nếu không tạm dừng (isPaused)
    if (!isPaused) {
      const timer = setTimeout(() => {
        nextImage();
      }, 3000); // Chuyển sang hình tiếp theo sau mỗi 3 giây
      return () => clearTimeout(timer); // Xóa timer khi unmount hoặc trước khi chạy useEffect tiếp theo
    }
  }, [currentImageIndex, isPaused]); // Dependency array includes currentImageIndex and isPaused

  const handleMouseOver = (index) => {
    setIsPaused(true); // Khi rê chuột, tạm dừng tự động chuyển slide
    setCurrentImageIndex(index);
  };

  const handleMouseLeave = () => {
    setIsPaused(false); // Khi không rê chuột nữa, tiếp tục tự động chuyển slide
  };

  return (
    <section className='banner p-5'>
      <div className="container-xxl">
        <div className="row">
          <div className="banner-details" onMouseLeave={handleMouseLeave}>
            <img src={images[currentImageIndex]} alt='' style={{ width: '100%' }} />
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
  );
}

export default Home;
