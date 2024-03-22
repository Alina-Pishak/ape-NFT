import styled from "styled-components";

export const FaqSection = styled.section`
  padding-top: 30px;
  padding-bottom: 30px;
`;

// export const FaqTitle = styled.h2``;

export const FaqList = styled.ol`
  counter-increment: faq-counter;
  /* &::before {
    content: "[" counter(faq-counter) "]";
    font-family: "Biro Script", serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.67;
    color: ${({ open }) => (open ? "inherit" : "var(--color-brand)")};
  } */
`;

export const FaqItem = styled.li`
  counter-increment: faq-counter;
  display: flex;
  gap: 8px;
  &::before {
    content: "[" counter(faq-counter) "]";
    width: 23px;
    height: 20px;
    font-family: "Biro Script", serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.67;
    color: ${({ open }) => (open ? "inherit" : "var(--color-brand)")};
    /* margin-right: 8px; */
  }
  border-radius: 12px;
  width: ${({ open }) => (open ? "216px" : "200px")};
  /* height: ${({ open }) => (open ? "158px" : "40px")}; */
  background-color: ${({ open }) =>
    open ? "var(--color-secondary)" : "transparent"};
  padding: ${({ open }) => (open ? "8px" : 0)};
  margin-bottom: 16px;
`;

// export const FaqItemDecorator = styled.span`
//   font-family: "Biro Script", serif;
//   font-weight: 400;
//   font-size: 12px;
//   line-height: 1.67;
//   color: ${({ open }) => (open ? "inherit" : "var(--color-brand)")};
// `;

export const FaqItemTitle = styled.h3`
  font-weight: 900;
  font-size: 20px;
  line-height: 1;
  text-transform: uppercase;
  color: ${({ open }) => (open ? "var(--color-brand)" : "inherit")};
  margin-bottom: 10px;
`;

export const FaqItemText = styled.p`
  opacity: ${({ open }) => (open ? 1 : 0)};
  max-height: ${({ open }) => (open ? "170px" : 0)};
  overflow: ${({ open }) => (open ? "visible" : "hidden")};
  transition: all 0.2s ease;
  font-family: "Messina Sans", sans-serif;
  font-size: 12px;
  line-height: 1.17;
  text-transform: uppercase;
`;
