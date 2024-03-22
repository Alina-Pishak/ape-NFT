import styled from "styled-components";

export const AboutSection = styled.section`
  padding-top: 60px;
  padding-bottom: 30px;
`;

// export const AboutContainer = styled.div``;

export const AboutTitle = styled.h2`
  font-weight: 900;
  font-size: 40px;
  line-height: 1;
  text-transform: uppercase;
  margin: 0 auto;
  margin-bottom: 16px;
  text-align: start;
  width: 216px;
`;

export const AboutTitleDecorate = styled(AboutTitle)`
  display: inline;
  color: var(--color-brand);
`;

export const AboutText = styled.p`
  font-family: "Messina Sans", sans-serif;
  font-size: 16px;
  line-height: 1.19;
  text-transform: uppercase;
  text-align: right;
  margin-bottom: 36px;
`;

export const AboutSecondText = styled.p`
  font-family: "Messina Sans", sans-serif;
  font-size: 12px;
  line-height: 1.17;
  text-transform: uppercase;
  text-align: center;
`;

export const AboutImg = styled.img`
  margin: 0 auto;
`;
