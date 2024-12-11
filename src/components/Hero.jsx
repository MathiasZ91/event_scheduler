import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [counter, setCounter] = useState(10); // Example initial countdown seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prevCounter) => (prevCounter === 0 ? 10 : prevCounter - 1));
    }, 1000);
    return () => clearInterval(timer); // Cleanup timer when component is unmounted
  }, []);

  const handleNavigationClick = (event, targetSlideId) => {
    event.preventDefault(); // Prevent default scrolling behavior
    const targetSlide = document.querySelector(targetSlideId);
    if (targetSlide) {
      targetSlide.scrollIntoView({ behavior: 'smooth' }); // Optionally, add smooth scrolling
    }
  };

  return (
    <div className="hero-section">
      {/* Banner above the carousel */}
      <div className="bg-black text-white py-3 px-6 text-center w-full">
        <div className="font-bold text-2xl mb-2">50% Black Friday DEAL!!</div>
        <div className="countdown font-mono text-lg">
          <span style={{ "--value": 10 }}></span>h
          <span style={{ "--value": 24 }}></span>m
          <span style={{ "--value": counter }}></span>s
        </div>
      </div>

      {/* Carousel */}
      <div className="carousel w-full">
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://www.eventim.de/obj/media/DE-eventim/teaser/smpfeature/2024/luciano-arena-tour-artwork-fb-post-1200x628.png"
            className="w-full h-96 object-cover"
            alt="Slide 1"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide4"
              className="btn btn-circle"
              onClick={(e) => handleNavigationClick(e, "#slide4")}
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle"
              onClick={(e) => handleNavigationClick(e, "#slide2")}
            >
              ❯
            </a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://www.eventim.de/obj/media/DE-eventim/teaser/smpfeature/2024/ak-ausserkontrolle-fb-post-1200x628.png"
            className="w-full h-96 object-cover"
            alt="Slide 2"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide1"
              className="btn btn-circle"
              onClick={(e) => handleNavigationClick(e, "#slide1")}
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle"
              onClick={(e) => handleNavigationClick(e, "#slide3")}
            >
              ❯
            </a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://www.eventim.de/obj/media/DE-eventim/teaser/smpfeature/2024/dardan-fb-post-1200x628.png"
            className="w-full h-96 object-cover"
            alt="Slide 3"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide2"
              className="btn btn-circle"
              onClick={(e) => handleNavigationClick(e, "#slide2")}
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle"
              onClick={(e) => handleNavigationClick(e, "#slide1")}
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
