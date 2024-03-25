import styled from "styled-components";

export const MintSection = styled.section`
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

export const MintText = styled.p`
  font-family: "Messina Sans", sans-serif;
  font-size: 16px;
  line-height: 1.19;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    width: 383px;
    margin: 0 auto;
    margin-bottom: 24px;
  }
  @media (min-width: 1280pz) {
    font-size: 24px;
    line-height: 1.21;
    margin-bottom: 40px;
  }
`;

export const MintBtn = styled.button`
  font-weight: 900;
  font-size: 16px;
  line-height: 1.19;
  color: inherit;
  backdrop-filter: blur(12px);
  background: var(--color-brand);
  border-radius: 8px;
  border: none;
  width: 216px;
  height: 41px;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 247px;
  }
  @media (min-width: 1280px) {
    font-size: 28px;
    line-height: 1.21;
    border-radius: 12px;
    width: 397px;
    height: 70px;
  }
`;

export const MintInput = styled.input`
  font-family: "Messina Sans", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;
  text-transform: uppercase;
  border: 1px solid
    ${({ $error }) =>
      $error ? "var(--color-brand)" : "var(--color-secondary)"};
  border-radius: 0 8px 8px 0;
  padding: 22px 24px;
  width: 168px;
  height: 48px;
  background-color: transparent;
  background: none;
  color: inherit;
  &:focus {
    border: 1px solid var(--color-primary);
  }
  &::placeholder {
    color: rgba(255, 255, 255, 0.24);
  }
  @media (min-width: 768px) {
    width: 200px;
  }
  @media (min-width: 1280px) {
    width: 333px;
    height: 64px;
    &::placeholder {
      font-size: 16px;
      line-height: 1.19;
    }
  }
`;

export const MintInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`;

export const MintIconWrapper = styled.div`
  border-radius: 8px 0 0 8px;
  padding: 12px;
  width: 48px;
  height: 48px;
  backdrop-filter: blur(12px);
  background: var(--color-secondary);
  @media (min-width: 1280px) {
    width: 64px;
    height: 64px;
  }
`;

export const MintDiscord = styled.svg`
  fill: #5a65f2;
`;
