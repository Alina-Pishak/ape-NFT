import {
  HeroBtn,
  HeroImg,
  HeroSecondTitle,
  HeroSection,
  HeroText,
  HeroTitle,
  ImgBtnWrapper,
} from "./Hero.styled";
import img from "../../img/hero-monkey.png";

const Hero = () => {
  return (
    <HeroSection className="container">
      <HeroSecondTitle>diD yOu seE iT ?</HeroSecondTitle>
      <HeroTitle>YACHT APES</HeroTitle>
      <HeroSecondTitle>Apes aRe eveRywhere</HeroSecondTitle>
      <ImgBtnWrapper>
        <HeroImg src={img} alt="Monkey" />
        <HeroBtn type="button">MEET APES</HeroBtn>
      </ImgBtnWrapper>
      <HeroText>
        Yacht Ape is a collection of unique digital apes that you can own in NFT
        format
      </HeroText>
    </HeroSection>
  );
};

export default Hero;
