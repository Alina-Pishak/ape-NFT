import styled from "styled-components";
import { CrossIcon, MainText } from "../../App.styled";

export const AboutSection = styled.section`
  padding-top: 60px;
  padding-bottom: 30px;
  @media (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 40px;
  }
  @media (min-width: 1280px) {
    padding-top: 120px;
    padding-bottom: 60px;
  }
`;

export const AboutContent = styled.div`
  @media (min-width: 768px) {
    position: relative;
    padding-bottom: 36px;
  }
`;

export const AboutTitle = styled.h2`
  font-weight: 900;
  font-size: 40px;
  line-height: 1;
  text-transform: uppercase;
  /* margin: 0 auto; */
  margin-bottom: 16px;
  text-align: start;
  width: 216px;
  @media (min-width: 768px) {
    font-size: 60px;
    width: 269px;
    margin: 0;
  }
  @media (min-width: 1280px) {
    font-size: 120px;
    width: 538px;
  }
`;

export const AboutTitleDecorate = styled.span`
  display: inline;
  color: var(--color-brand);
  font-weight: 900;
  font-size: 40px;
  line-height: 1;
  text-transform: uppercase;
  /* margin: 0 auto; */
  /* margin-bottom: 16px;
  text-align: start;
  width: 216px; */
  @media (min-width: 768px) {
    font-size: 60px;
    /* width: 269px; */
    /* margin: 0; */
  }
  @media (min-width: 1280px) {
    font-size: 120px;
    /* width: 538px; */
  }
`;

export const AboutText = styled.p`
  font-family: "Messina Sans", sans-serif;
  font-size: 16px;
  line-height: 1.19;
  text-transform: uppercase;
  text-align: right;
  margin-bottom: 36px;
  @media (min-width: 768px) {
    width: 275px;
  }
  @media (min-width: 1280px) {
    width: 409px;
    font-size: 24px;
    line-height: 1.21;
  }
`;

export const AboutSecondText = styled(MainText)`
  text-align: center;
  margin: 0 auto;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    font-size: 16px;
    margin: 0;
    line-height: 1.19;
    margin-right: auto;
  }
  @media (min-width: 1280px) {
    font-size: 24px;
    line-height: 1.21;
  }
`;

export const AboutSecondTextWrapper = styled.div`
  width: 216px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 269px;
  }
  @media (min-width: 1280px) {
    width: 417px;
  }
`;

export const AboutIcon = styled(CrossIcon)``;

export const AboutImg = styled.img`
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 313px;
    height: 422px;
    position: absolute;
    bottom: 0;
    left: 55%;
  }
  @media (min-width: 1280px) {
    width: 492px;
    height: 662px;
  }
`;

export const AboutTextWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    gap: 48px;
    margin-bottom: 68px;
  }
`;
