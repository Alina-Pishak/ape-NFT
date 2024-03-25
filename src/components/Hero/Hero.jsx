import { heroImg } from "../../data/images";
import {
  HeroBtn,
  HeroImg,
  HeroSecondTitle,
  HeroSection,
  HeroText,
  HeroTitle,
  ImgBtnWrapper,
} from "./Hero.styled";

const Hero = () => {
  return (
    <HeroSection className="container">
      <HeroSecondTitle>diD yOu seE iT ?</HeroSecondTitle>
      <HeroTitle>YACHT APES</HeroTitle>
      <HeroSecondTitle>Apes aRe eveRywhere</HeroSecondTitle>
      <ImgBtnWrapper>
        <picture>
          <source
            srcSet={`${heroImg.imgDesktop[0]} 1x,${heroImg.imgDesktop[1]} 2x`}
            media="(min-width: 1280px)"
          />
          <source
            srcSet={`${heroImg.imgTablet[0]} 1x,${heroImg.imgTablet[1]} 2x`}
            media="(min-width: 768px)"
          />
          <source
            srcSet={`${heroImg.imgMobile[0]} 1x,${heroImg.imgMobile[1]} 2x`}
            media="(max-width: 767px)"
          />
          <HeroImg src={heroImg.imgMobile[0]} alt="Monkey" />
        </picture>
        <HeroText>
          Yacht Ape is a collection of unique digital apes that you can own in
          NFT format
        </HeroText>
        <HeroBtn type="button">MEET APES</HeroBtn>
      </ImgBtnWrapper>
    </HeroSection>
  );
};

export default Hero;
