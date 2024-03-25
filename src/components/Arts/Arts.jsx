import { CarouselProvider, Slider } from "pure-react-carousel";
import {
  MainSlide,
  NextBtn,
  PrevBtn,
  SliderBtnList,
  Title,
} from "../../App.styled";
import { imagesArts } from "../../data/images";
import { ArtsImg, ArtsSection } from "./Arts.styled";
import { useMediaQuery } from "react-responsive";
const Arts = () => {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 768px)" });
  const isTabletScreen = useMediaQuery({ query: "(max-width: 1280px)" });

  return (
    <ArtsSection className="container">
      <Title>Collection</Title>
      <CarouselProvider
        naturalSlideWidth={isMobileScreen ? 216 : isTabletScreen ? 284 : 240}
        naturalSlideHeight={isMobileScreen ? 256 : isTabletScreen ? 336 : 280}
        isIntrinsicHeight
        totalSlides={14}
        visibleSlides={isMobileScreen ? 1 : isTabletScreen ? 2 : 4}
      >
        <Slider classNameTray="tray">
          {imagesArts.map(({ tablet, desktop }, index) => (
            <MainSlide key={index} className="slide" index={0}>
              <picture>
                <source
                  srcSet={`${desktop[0]} 1x,${desktop[1]} 2x`}
                  media="(min-width: 1280px)"
                />
                <source
                  srcSet={`${tablet[0]} 1x,${tablet[1]} 2x`}
                  media="(max-width: 1279px)"
                />
                <ArtsImg src={tablet[0]} alt="Monkey" />
              </picture>
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
      </CarouselProvider>
    </ArtsSection>
  );
};

export default Arts;
