import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// import carousel component from react package
import { Carousel } from "react-responsive-carousel";

// import images
import BANNER_IMG_1 from "../../assents/banner-images/banner2.png";
import BANNER_IMG_2 from "../../assents/banner-images/banner1.png";
import BANNER_IMG_3 from "../../assents/banner-images/banner4.png";
import BANNER_IMG_4 from "../../assents/banner-images/banner5.png";
import BANNER_IMG_5 from "../../assents/banner-images/banner3.png";

// styles
import "./style.css"

const Banner = () => {
  return (
    <>
    <div>
        <Carousel
          autoPlay={true}
          showThumbs={false}
          infiniteLoop={true}
          interval="2000"
          showStatus={false}
        >
          <div>
            <img className="banner-image" src={BANNER_IMG_1} />
          </div>
          <div>
            <img className="banner-image" src={BANNER_IMG_2} />
          </div>
          <div>
            <img className="banner-image" src={BANNER_IMG_3} />
          </div>
          <div>
            <img className="banner-image" src={BANNER_IMG_4} />
          </div>
          <div>
            <img className="banner-image" src={BANNER_IMG_5} />
          </div>
        </Carousel>
        </div>
    </>
  );
};

export default Banner;
