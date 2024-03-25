import { useState } from "react";
import {
  HeaderContainer,
  HeaderLink,
  HeaderLinkItem,
  HeaderLinkList,
  HeaderLogo,
  HeaderSection,
  MenuBtn,
} from "./Header.styled";
import sprite from "../../img/symbol-defs.svg";
import MobileMenu from "../MobileMenu/MobileMenu";
import MediaQuery, { useMediaQuery } from "react-responsive";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const isMobileScreen = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <HeaderSection className="container">
      <HeaderContainer>
        <a href="#hero">
          <HeaderLogo width={48} height={32}>
            <use href={`${sprite}#icon-logo`}></use>
          </HeaderLogo>
        </a>
        <ul>
          <HeaderLinkItem>
            <MenuBtn
              type="button"
              onClick={() => {
                if (isMobileScreen) {
                  setShowMobileMenu(true);
                } else if (!isMobileScreen && showMenu) {
                  setShowMenu(false);
                } else if (!isMobileScreen) {
                  setShowMenu(true);
                }
              }}
            >
              {!isMobileScreen && showMenu ? "Close" : "Menu"}
            </MenuBtn>
          </HeaderLinkItem>
          <HeaderLinkItem>
            <a href="#a">
              <svg width={16} height={16}>
                <use href={`${sprite}#icon-discord-logo`}></use>
              </svg>
            </a>
          </HeaderLinkItem>
          <HeaderLinkItem>
            <a href="#a">
              <svg width={16} height={16}>
                <use href={`${sprite}#icon-ship`}></use>
              </svg>
            </a>
          </HeaderLinkItem>
          <HeaderLinkItem>
            <a href="#a">
              <svg width={16} height={16}>
                <use href={`${sprite}#icon-twitter-logo`}></use>
              </svg>
            </a>
          </HeaderLinkItem>
        </ul>
      </HeaderContainer>
      {showMobileMenu && (
        <MediaQuery maxWidth={767}>
          <MobileMenu onClose={() => setShowMobileMenu(false)} />
        </MediaQuery>
      )}
      {showMenu && (
        <MediaQuery minWidth={768}>
          <HeaderLinkList>
            <HeaderLinkItem>
              <HeaderLink href="#about">ABOUT</HeaderLink>
            </HeaderLinkItem>
            <HeaderLinkItem>
              <HeaderLink href="#mind-map">M-MAP</HeaderLink>
            </HeaderLinkItem>
            <HeaderLinkItem>
              <HeaderLink href="#faq">FAQ</HeaderLink>
            </HeaderLinkItem>
            <HeaderLinkItem>
              <HeaderLink href="#collection">ARTS</HeaderLink>
            </HeaderLinkItem>
            <HeaderLinkItem>
              <HeaderLink href="#mint">MINT</HeaderLink>
            </HeaderLinkItem>
          </HeaderLinkList>
        </MediaQuery>
      )}
    </HeaderSection>
  );
};

export default Header;
