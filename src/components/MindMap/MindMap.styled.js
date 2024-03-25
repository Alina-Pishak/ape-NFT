import styled from "styled-components";
import { MainText } from "../../App.styled";

export const MindMapSection = styled.section`
  padding-top: 30px;
  padding-bottom: 30px;
  @media (min-width: 768px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  @media (min-width: 1280px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;

export const MindMapList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 284px);
  grid-template-rows: repeat(2, 242px);
  grid-gap: 24px;
  @media (min-width: 1280px) {
    grid-template-columns: repeat(2, 504px);
    grid-template-rows: repeat(2, 480px);
  }
`;

export const MindMapItem = styled.li`
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* width: 284px;
  height: 242px; */
  background: var(--color-secondary);
  &:last-child {
    background-color: var(--color-brand);
    cursor: pointer;
  }
`;

export const MindMapItemText = styled(MainText)`
  @media (min-width: 768px) {
    width: 128px;
    margin-left: auto;
  }
  @media (min-width: 1280px) {
    font-size: 24px;
    line-height: 1.21;
    width: 228px;
  }
`;

export const MindMapItemTitle = styled.h3`
  font-weight: 900;
  font-size: 31px;
  line-height: 1;
  text-transform: uppercase;
  @media (min-width: 1280px) {
    font-size: 64px;
  }
`;

export const MindMapItemIcon = styled.svg`
  display: block;
  fill: var(--color-primary);
  margin-bottom: 78px;
  margin-left: auto;
`;
