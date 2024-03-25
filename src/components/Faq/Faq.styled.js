import styled from "styled-components";
import { MainText } from "../../App.styled";

export const FaqSection = styled.section`
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

export const FaqImg = styled.img`
  display: none;
  @media (min-width: 768px) {
    display: ${({ open }) => (open ? "block" : "none")};
    transform: rotate(-16deg);
    position: absolute;
    border-radius: 18px;
    top: -10px;
    width: 148px;
    height: 183px;
    left: 12px;
  }
  @media (min-width: 1280px) {
    width: 248px;
    height: 282px;
  }
`;

export const FaqList = styled.ol`
  counter-increment: faq-counter 0;
`;

export const FaqItem = styled.li`
  counter-increment: faq-counter;
  display: flex;
  gap: 8px;
  margin: 0 auto;
  position: relative;
  &::before {
    content: "[" counter(faq-counter) "]";
    font-family: "Biro Script", serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.67;
    letter-spacing: 5px;
    color: ${({ open }) => (open ? "inherit" : "var(--color-brand)")};
    transition: color var(--transition-dur-and-func);
  }
  border-radius: 12px;
  width: ${({ open }) => (open ? "100%" : "200px")};
  background-color: ${({ open }) =>
    open ? "var(--color-secondary)" : "transparent"};
  padding: ${({ open }) => (open ? "8px" : 0)};
  margin-bottom: 16px;
  &:hover {
    &::before {
      color: var(--color-primary);
    }
  }
  @media (min-width: 768px) {
    width: ${({ open }) => (open ? "100%" : "393px")};
    padding: ${({ open }) => (open ? "18px 16px 23px 183px" : 0)};
    margin: 0;
    margin-left: auto;
    margin-bottom: 36px;
    &::before {
      font-size: 16px;
      line-height: 1.69;
      letter-spacing: 7px;
    }
  }
  @media (min-width: 1280px) {
    margin-bottom: 48px;
    width: ${({ open }) => (open ? "100%" : "730px")};
    padding: ${({ open }) => (open ? "24px 24px 24px 297px" : 0)};
    &::before {
      font-size: 24px;
      line-height: 1.67;
      letter-spacing: 10px;
    }
  }
`;

export const FaqItemTitle = styled.h3`
  font-weight: 900;
  font-size: 20px;
  line-height: 1;
  text-transform: uppercase;
  color: ${({ open }) => (open ? "var(--color-brand)" : "inherit")};
  margin-bottom: 10px;
  transition: color var(--transition-dur-and-func);
  &:hover {
    color: var(--color-brand);
  }
  @media (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 12px;
  }
  @media (min-width: 1280px) {
    font-size: 64px;
    margin-bottom: 36px;
  }
`;

export const FaqItemText = styled(MainText)`
  opacity: ${({ open }) => (open ? 1 : 0)};
  max-height: ${({ open }) => (open ? "170px" : 0)};
  overflow: ${({ open }) => (open ? "visible" : "hidden")};
  transition: all 0.2s ease;
  @media (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.19;
  }
`;
