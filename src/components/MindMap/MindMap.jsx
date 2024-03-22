import {
  MindMapSlideIcon,
  MindMapSlideText,
  MindMapSlideTitle,
  MindMapSection,
  MindMapSlide,
} from "./MindMap.styled";
import sprite from "../../img/symbol-defs.svg";
import { NextBtn, PrevBtn, SliderBtnList, Title } from "../../App.styled";
import { CarouselProvider, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const MindMap = () => {
  return (
    <MindMapSection className="container">
      <Title>MIND MAP</Title>
      <CarouselProvider
        naturalSlideWidth={216}
        naturalSlideHeight={242}
        isIntrinsicHeight
        totalSlides={4}
        // This number can be float to let next slide show
        visibleSlides={1}
      >
        <Slider classNameTray="tray" style={{ marginBottom: "24px" }}>
          <MindMapSlide className="slide" index={0}>
            <MindMapSlideText>
              All owners of APE NFTs and all future collections will receive a
              percentage of sales based on the number of NFTs they own
            </MindMapSlideText>
            <MindMapSlideTitle>YAPE DROP</MindMapSlideTitle>
          </MindMapSlide>
          <MindMapSlide className="slide" index={1}>
            <MindMapSlideText>
              Launch of the 2nd YACHT Collection Releasing the first version of
              the Ape Slam Game
            </MindMapSlideText>
            <MindMapSlideTitle>New Collection</MindMapSlideTitle>
          </MindMapSlide>
          <MindMapSlide className="slide" index={2}>
            <MindMapSlideText>
              Launch your own token, the proceeds of which will go to a global
              fund to LAUNCH YACHT CLUB AND PROMOTE it
            </MindMapSlideText>
            <MindMapSlideTitle>Token</MindMapSlideTitle>
          </MindMapSlide>
          <MindMapSlide className="slide" index={3}>
            <MindMapSlideIcon width={48} height={48}>
              <use href={`${sprite}#icon-arrow`}></use>
            </MindMapSlideIcon>
            <MindMapSlideTitle> Learn more in mind map</MindMapSlideTitle>
          </MindMapSlide>
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
    </MindMapSection>
  );
};

export default MindMap;
