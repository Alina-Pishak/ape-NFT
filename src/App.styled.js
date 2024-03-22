import { ButtonBack, ButtonNext, Slide } from "pure-react-carousel";
import styled from "styled-components";

export const Title = styled.h2`
  font-weight: 900;
  font-size: 44px;
  line-height: 0.91;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 24px;
`;

export const CrossIcon = styled.svg`
  display: block;
  margin: 0 auto;
  margin-bottom: 16px;
  fill: var(--color-primary);
`;

export const MainSlide = styled(Slide)`
  border-radius: 12px;
  width: 216px;
`;

export const PrevBtn = styled(ButtonBack)`
  font-family: "Biro Script", serif;
  font-size: 24px;
  line-height: 1;
  border: none;
  background: none;
  color: var(--color-primary);
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
  justify-content: space-around;
`;
