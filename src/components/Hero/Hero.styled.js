import styled from "styled-components";
import { MainText } from "../../App.styled";

export const HeroSection = styled.section`
  border-radius: 12px;
  width: 344px;
  height: 542px;
  background-color: var(--color-brand);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding-top: 36px;
  @media (min-width: 768px) {
    padding: 124px 72px 35px 72px;
    border-radius: 16px;
    width: 736px;
    height: 421px;
    align-items: start;
    position: relative;
  }
  @media (min-width: 1280px) {
    border-radius: 24px;
    width: 1408px;
    height: 677px;
    padding: 197px 194px 206px 194px;
  }
`;

export const HeroTitle = styled.h1`
  font-weight: 900;
  font-size: 42px;
  line-height: 1;
  letter-spacing: 0.01em;
  color: var(--color-secondary);
  @media (min-width: 768px) {
    font-size: 92px;
    text-align: justify;
  }
  @media (min-width: 1280px) {
    font-size: 164px;
  }
`;

export const HeroSecondTitle = styled.h2`
  font-family: "Biro Script", serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.69;
  color: var(--color-secondary);
  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 1.65;
  }
`;

export const HeroImg = styled.img`
  width: 216px;
  height: 284px;
  @media (min-width: 768px) {
    width: 283px;
    height: 386px;
    bottom: 0;
    left: 30%;
    position: absolute;
  }
  @media (min-width: 1280px) {
    width: 463px;
    height: 612px;
  }
`;

export const HeroBtn = styled.button`
  font-family: inherit;
  font-weight: 900;
  font-size: 16px;
  line-height: 1.19;
  border-radius: 8px;
  width: 216px;
  height: 41px;
  backdrop-filter: blur(12px);
  background: var(--color-background-action-dark);
  border: none;
  position: absolute;
  bottom: 0;
  transition: color var(--transition-dur-and-func);
  &:hover {
    color: var(--color-hover);
  }
  @media (min-width: 768px) {
    border-radius: 12px;
    width: 190px;
    position: static;
  }
  @media (min-width: 1280px) {
    font-size: 28px;
    line-height: 1.21;
    width: 337px;
    height: 70px;
  }
`;

export const HeroText = styled(MainText)`
  font-family: "Messina Sans Dark", sans-serif;
  width: 217px;
  text-align: center;
  margin-top: 49px;
  color: var(--color-secondary);
  @media (min-width: 768px) {
    width: 190px;
    text-align: justify;
    text-indent: 40%;
    margin-bottom: 16px;
    margin-top: 0;
  }
  @media (min-width: 1280px) {
    width: 337px;
    font-size: 16px;
    line-height: 1.19;
  }
`;

export const ImgBtnWrapper = styled.div`
  margin-top: 6px;
  position: relative;
  height: 321px;
  @media (min-width: 768px) {
    position: static;
    margin-left: auto;
  }
`;
