import styled from "styled-components";
import { HeaderLinkItem, OpenMenuBtn } from "../Header/Header.styled";

export const MobileMenuContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1000;
  top: 0;
  left: 0;
  padding: 16px;
  display: flex;
  background-color: var(--color-secondary);
  /* transition: opacity var(--transition-dur-and-func),
    visiblity var(--transition-dur-and-func); */
`;

export const MobileMenuLogo = styled.svg`
  fill: #fff;
`;

export const MobileMenuLinkItem = styled(HeaderLinkItem)`
  background-color: var(--color-background-action-light);
`;

export const CloseMenuBtn = styled(OpenMenuBtn)`
  color: #fff;
`;

export const MenuDiscordIcon = styled.svg`
  fill: #fff;
`;

export const MenuShipIcon = styled.svg`
  fill: #fff;
`;

export const MenuTwitterIcon = styled.svg`
  fill: #fff;
`;

export const NavList = styled.ul`
  padding-top: 232px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
`;

export const NavListItem = styled.li``;

export const NavLink = styled.a`
  font-family: "Messina Sans", sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.2;
  color: var(--color-primary);
`;
