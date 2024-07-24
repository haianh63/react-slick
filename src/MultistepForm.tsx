import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import TestCard from "./testCard";
import {Button} from "@mantine/core";
import "./styles.css";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <Button 
      variant="transparent"
      onClick={onClick}
      style={{ 
        width: "auto", 
        whiteSpace: "nowrap",
        overflow: "visible"
      }}>
      <MdArrowForwardIos size={25}/>
    </Button>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <Button 
      variant="transparent"
      onClick={onClick}
      style={{ 
        width: "auto", 
        whiteSpace: "nowrap",
        overflow: "visible"
      }}>
      <MdArrowBackIos size={25} />
    </Button>
  );
}

function MultistepForm() {

  const data =["Cat 1", "Cat 2", "Cat 3", "Cat 4", "Cat 5"]
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    customPaging: function (i) {
      return <div className="dot"></div>;
    },
    dotsClass: "slick-dots slick-thumb"
  };
  return (
      <Slider {...settings} style={{margin:"20px", 
                                    display: "flex", 
                                    justifyContent: "center", 
                                    alignItems: "center", 
                                    gap: "30px"}}>
        {data.map((index, item) => (
          <TestCard key={index} data={item} path="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png" />
        ))}
      </Slider>
  );
}

export default MultistepForm;
