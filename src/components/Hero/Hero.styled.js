import styled from "styled-components";

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
`;

export const HeroTitle = styled.h1`
  /* font-family: "Right Grotesk"; */
  font-weight: 900;
  font-size: 42px;
  line-height: 1;
  letter-spacing: 0.01em;
  color: var(--color-secondary);
`;

export const HeroSecondTitle = styled.h2`
  font-family: "Biro Script", serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.69;
  color: var(--color-secondary);
`;

export const HeroImg = styled.img`
  width: 216px;
  height: 284px;
`;

export const HeroBtn = styled.button`
  font-weight: 900;
  font-size: 16px;
  line-height: 1.19;
  /* color: #1e1e1e; */
  border-radius: 8px;
  width: 216px;
  height: 41px;
  backdrop-filter: blur(12px);
  background: var(--color-background-action-dark);
  border: none;
  position: absolute;
  bottom: 0;
`;

export const HeroText = styled.p`
  font-family: "Messina Sans", sans-serif;
  font-size: 12px;
  line-height: 1.17;
  text-transform: uppercase;
  max-width: 217px;
  text-align: center;
  margin-top: 12px;
  color: var(--color-secondary);
`;

export const ImgBtnWrapper = styled.div`
  margin-top: 6px;
  position: relative;
  height: 321px;
`;
