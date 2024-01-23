import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import PropTypes from "prop-types";
import Cards from "../card/Cards";
import { useNavigate } from "react-router-dom";

export default function SampleSlider({
  swiperClassName,
  autoPlay,
  style,
  spaceBetween,
  speed,
  breakPoints,
  loop,
  cardList,
  navigation,
  direction,
  width,
  height
}) {
  const Navigate = useNavigate();
  const onClick = parameter => {
    Navigate("/products/" + parameter);
  };
  return (
    <div>
      <Swiper
        className={swiperClassName}
        modules={[Autoplay]}
        autoplay={autoPlay}
        style={style}
        spaceBetween={spaceBetween}
        speed={speed}
        breakpoints={breakPoints}
        loop={loop}
        navigation={navigation}
        direction={direction}
      >
        {cardList.map((item, key) => {
          return (
            <SwiperSlide key={key}>
              <Cards
                img={item.img}
                overlay={true}
                onclick={onClick}
                parameter={item.title}
                width={width}
                height={height}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

SampleSlider.propTypes = {
  swiperClassName: PropTypes.string,
  autoPlay: PropTypes.object,
  style: PropTypes.object,
  spaceBetween: PropTypes.number,
  speed: PropTypes.number,
  breakPoints: PropTypes.object,
  loop: PropTypes.bool,
  cardList: PropTypes.array,
  navigation: PropTypes.object,
  direction: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};
