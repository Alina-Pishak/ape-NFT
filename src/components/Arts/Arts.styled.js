import styled from "styled-components";

export const ArtsSection = styled.section`
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

export const ArtsImg = styled.img`
  border-radius: 25px;
  margin: 0 auto;
  margin-bottom: 24px;
  width: 216px;
  height: 256px;
  @media (min-width: 768px) {
    width: 284px;
    height: 336px;
    margin-right: 12px;
  }
  @media (min-width: 1280px) {
    width: 240px;
    height: 280px;
    margin-right: 24px;
  }
`;
