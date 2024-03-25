import { CarouselProvider, Slider } from "pure-react-carousel";
import { NextBtn, PrevBtn, SliderBtnList } from "../../App.styled";
import sprite from "../../img/symbol-defs.svg";
import {
  MindMapItemIcon,
  MindMapItemText,
  MindMapItemTitle,
} from "../MindMap/MindMap.styled";
import { MindMapSlide, MindMapSlideContent } from "./MindMapMobile.styled";

const MindMapMobile = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={216}
      naturalSlideHeight={242}
      isIntrinsicHeight
      totalSlides={4}
      visibleSlides={1}
    >
      <Slider classNameTray="tray" style={{ marginBottom: "24px" }}>
        <MindMapSlide className="slide" index={0}>
          <MindMapSlideContent>
            <MindMapItemText>
              All owners of APE NFTs and all future collections will receive a
              percentage of sales based on the number of NFTs they own
            </MindMapItemText>
            <MindMapItemTitle>YAPE DROP</MindMapItemTitle>
          </MindMapSlideContent>
        </MindMapSlide>
        <MindMapSlide className="slide" index={1}>
          <MindMapSlideContent>
            <MindMapItemText>
              Launch of the 2nd YACHT Collection Releasing the first version of
              the Ape Slam Game
            </MindMapItemText>
            <MindMapItemTitle>New Collection</MindMapItemTitle>
          </MindMapSlideContent>
        </MindMapSlide>
        <MindMapSlide className="slide" index={2}>
          <MindMapSlideContent>
            <MindMapItemText>
              Launch your own token, the proceeds of which will go to a global
              fund to LAUNCH YACHT CLUB AND PROMOTE it
            </MindMapItemText>
            <MindMapItemTitle>Token</MindMapItemTitle>
          </MindMapSlideContent>
        </MindMapSlide>
        <MindMapSlide className="slide" index={3}>
          <MindMapSlideContent>
            <MindMapItemIcon width={48} height={48}>
              <use href={`${sprite}#icon-arrow`}></use>
            </MindMapItemIcon>
            <MindMapItemTitle> Learn more in mind map</MindMapItemTitle>
          </MindMapSlideContent>
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
    </CarouselProvider>
  );
};

export default MindMapMobile;
