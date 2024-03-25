import styled from "styled-components";
import { MainText } from "../../App.styled";

export const FooterContainer = styled.section`
  padding-top: 30px;
  padding-bottom: 24px;
  @media (min-width: 768px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

export const FooterText = styled(MainText)`
  text-align: center;
`;
