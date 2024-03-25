import styled from "styled-components";
import { MainSlide } from "../../App.styled";

export const MindMapSlide = styled(MainSlide)`
  padding: 24px 12px;
  background: var(--color-secondary);
  &:last-child {
    background-color: var(--color-brand);
  }
`;

export const MindMapSlideContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
