import styled from "styled-components";
import { ButtonBack, ButtonNext } from "pure-react-carousel";
import { MainSlide } from "../../App.styled";

export const MindMapSection = styled.section`
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const MindMapList = styled.ul`
  margin-bottom: 24px;
`;

export const MindMapItem = styled.li`
  border-radius: 12px;
  padding: 24px 12px;
  width: 216px;
  height: 242px;
  background: var(--color-secondary);
`;

export const MindMapSlide = styled(MainSlide)`
  padding: 24px 12px;
  background: var(--color-secondary);
  &:last-child {
    background-color: var(--color-brand);
  }
`;

export const MindMapSlideText = styled.p`
  font-family: "Messina Sans", sans-serif;
  font-size: 12px;
  line-height: 1.17;
  text-transform: uppercase;
  margin-bottom: 78px;
`;

export const MindMapSlideTitle = styled.h3`
  font-weight: 900;
  font-size: 31px;
  line-height: 1;
  text-transform: uppercase;
`;

export const MindMapSlideIcon = styled.svg`
  display: block;
  fill: var(--color-primary);
  margin-bottom: 78px;
  margin-left: auto;
`;
