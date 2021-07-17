import React from "react";
import Slider from "react-slick";
import Slide_one from '../../resources/images/slide_one.jpg';
import Slide_two from "../../resources/images/slide_two.jpg";
import Slide_three from "../../resources/images/slide_three.jpg";

const Carrousel = () => {
  const Settings = {
    dots: false,
    Infinite: true,
    autoplay: true,
    speed: 500,
  };

  return (
    <div
      className="carrousel_wrapper"
      style={{
        height: `${window.innerHeight}px`,
        overflow: "hidden",
        backgroundColor: "red",
      }}
    >
      <Slider {...Settings}>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${Slide_one})`,
              height: `${window.innerHeight}px`,
            }}
          ></div>
        </div>
        <div><div
            className="carrousel_image"
            style={{
              background: `url(${Slide_two})`,
              height: `${window.innerHeight}px`,
            }}
          ></div></div>
        <div><div
            className="carrousel_image"
            style={{
              background: `url(${Slide_three})`,
              height: `${window.innerHeight}px`,
            }}
          ></div></div>
      </Slider>
    </div>
  );
};

export default Carrousel;
