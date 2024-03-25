import { ButtonBack, ButtonNext, Slide } from "pure-react-carousel";
import styled from "styled-components";

export const Title = styled.h2`
  font-weight: 900;
  font-size: 44px;
  line-height: 0.91;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    font-size: 80px;
    line-height: 1;
    margin-bottom: 40px;
  }
  @media (min-width: 1280px) {
    font-size: 160px;
    margin-bottom: 80px;
  }
`;

export const MainText = styled.p`
  font-family: "Messina Sans", sans-serif;
  font-size: 12px;
  line-height: 1.17;
  text-transform: uppercase;
`;

export const CrossIcon = styled.svg`
  display: block;
  margin: 0 auto;
  margin-bottom: 16px;
  fill: var(--color-primary);
  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
  @media (min-width: 1280px) {
    width: 36px;
    height: 36px;
    margin-bottom: 36px;
  }
`;

export const MainSlide = styled(Slide)`
  border-radius: 12px;
`;

export const PrevBtn = styled(ButtonBack)`
  font-family: "Biro Script", serif;
  font-size: 24px;
  line-height: 1;
  border: none;
  background: none;
  color: var(--color-primary);
  @media (min-width: 768px) {
    line-height: 1.25;
  }
`;

export const NextBtn = styled(ButtonNext)`
  font-family: "Biro Script", serif;
  font-size: 24px;
  line-height: 1;
  border: none;
  background: none;
  color: var(--color-primary);
`;

export const SliderBtnList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;
`;
