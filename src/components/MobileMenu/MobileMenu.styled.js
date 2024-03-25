import styled from "styled-components";
import { HeaderLinkItem, MenuBtn } from "../Header/Header.styled";

export const MobileMenuContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1000;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: var(--color-secondary);
  padding-top: 54px;
`;

export const MobileMenuLogo = styled.svg`
  fill: #fff;
  transition: fill var(--transition-dur-and-func);
  &:hover {
    fill: var(--color-brand);
  }
`;

export const MobileMenuLinkItem = styled(HeaderLinkItem)`
  background-color: var(--color-background-action-light);
`;

export const CloseMenuBtn = styled(MenuBtn)`
  color: #fff;
  transition: color var(--transition-dur-and-func);
  &:hover {
    color: var(--color-brand);
  }
`;

export const MenuIcon = styled.svg`
  fill: #fff;
  transition: fill var(--transition-dur-and-func);
  &:hover {
    fill: var(--color-brand);
  }
`;

export const NavList = styled.ul`
  padding-top: 232px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 105px;
`;

export const NavListItem = styled.li``;

export const NavLink = styled.a`
  font-family: "Messina Sans", sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.2;
  color: var(--color-primary);
  transition: color var(--transition-dur-and-func);
  &:hover {
    color: var(--color-brand);
  }
`;
