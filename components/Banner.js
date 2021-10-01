import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div className="banner relative">
      {/* gradient for banner to look faded at bottom */}
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={8000}
        className="cursor-pointer"
      >
        <div>
          <img
            loading="lazy"
            src="https://links.papareact.com/gi1"
            alt="carousel 1"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://links.papareact.com/6ff"
            alt="carousel 2"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://links.papareact.com/7ma"
            alt="carousel 3"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
