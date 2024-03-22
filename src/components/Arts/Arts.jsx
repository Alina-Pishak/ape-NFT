import { CarouselProvider, Slider } from "pure-react-carousel";
import {
  MainSlide,
  NextBtn,
  PrevBtn,
  SliderBtnList,
  Title,
} from "../../App.styled";
import { images } from "../../data/images";
import { ArtsImg } from "./Arts.styled";

const Arts = () => {
  return (
    <section className="container">
      <Title>Collection</Title>
      <CarouselProvider
        naturalSlideWidth={216}
        naturalSlideHeight={256}
        isIntrinsicHeight
        totalSlides={14}
        // This number can be float to let next slide show
        visibleSlides={1}
      >
        <Slider classNameTray="tray" style={{ marginBottom: "24px" }}>
          {images.map(({ img }, index) => (
            <MainSlide key={index} className="slide" index={0}>
              <ArtsImg src={img} alt="" width={216} height={256} />
            </MainSlide>
          ))}
        </Slider>
        <SliderBtnList>
          <li>
            <PrevBtn>Prev</PrevBtn>
          </li>
          <li>
            <NextBtn>Next</NextBtn>
          </li>
        </SliderBtnList>
        {/* <PrevBtn>Prev</PrevBtn>
        <NextBtn>Next</NextBtn> */}
      </CarouselProvider>
    </section>
  );
};

export default Arts;
