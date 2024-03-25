import styled from "styled-components";

export const HeaderSection = styled.header`
  display: flex;
  justify-content: center;
  width: 344px;
  position: relative;
  padding-top: 54px;
  @media (min-width: 768px) {
    width: 736px;
  }
  @media (min-width: 1280px) {
    width: 1408px;
    padding-top: 16px;
  }
`;

export const HeaderLogo = styled.svg`
  @media (min-width: 1280px) {
    width: 72px;
    height: 50px;
  }
`;

export const HeaderContainer = styled.div`
  position: absolute;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 8px;
  @media (min-width: 768px) {
    padding: 12px;
  }
  @media (min-width: 1280px) {
    padding: 24px 96px;
  }
`;

// export const HeaderLogo = styled.a``;

// export const HeaderLinkWrapper = styled.ul`
//   @media (min-width: 768px) {
//     padding-top: 12px;
//     position: absolute;
//     z-index: 1000;
//     right: 60px;
//     border-radius: 12px;
//     /* padding: 10px; */
//     width: 288px;
//     height: 48px;
//   }
// `;

export const HeaderLinkList = styled.ul`
  @media (min-width: 768px) {
    display: flex;
    padding-top: 12px;
    position: absolute;
    z-index: 1000;
    right: 60px;
    border-radius: 12px;
  }
  @media (min-width: 1280px) {
    padding-top: 24px;
    right: 176px;
  }
`;

export const HeaderLinkItem = styled.li`
  border-radius: 8px;
  width: 48px;
  height: 48px;
  backdrop-filter: blur(12px);
  background-color: var(--color-background-action-dark);
  display: flex;
  justify-content: center;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
  @media (min-width: 1280px) {
    width: 80px;
    height: 80px;
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

export const HeaderLink = styled.a`
  @media (min-width: 768px) {
    font-family: "Messina Sans", sans-serif;
    font-weight: 600;
    font-size: 12px;
    line-height: 1.17;
    color: var(--color-secondary);
  }
  @media (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.19;
  }
`;

export const MenuBtn = styled.button`
  font-family: "Messina Sans", sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.17;
  color: var(--color-secondary);
  border: none;
  background: none;
  @media (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.19;
  }
`;
