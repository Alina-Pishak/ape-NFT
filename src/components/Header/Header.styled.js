import styled from "styled-components";

export const HeaderSection = styled.header`
  display: flex;
  justify-content: center;
`;

export const HeaderContainer = styled.div`
  position: absolute;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 344px;
  /* margin: 0 auto; */
  margin: 0;
`;

export const HeaderLogo = styled.a``;

export const HeaderLinkList = styled.ul``;

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
`;

export const HeaderLink = styled.a``;

export const OpenMenuBtn = styled.button`
  font-family: "Messina Sans", sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.17;
  color: var(--color-secondary);
  border: none;
  background: none;
`;
