import { useState } from "react";
import {
  HeaderContainer,
  HeaderLink,
  HeaderLinkItem,
  HeaderLinkList,
  HeaderLogo,
  HeaderSection,
  OpenMenuBtn,
} from "./Header.styled";
import sprite from "../../img/symbol-defs.svg";
import MobileMenu from "../MobileMenu/MobileMenu";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <HeaderSection>
      <HeaderContainer>
        <HeaderLogo href="#hero">
          <svg width={48} height={32}>
            <use href={`${sprite}#icon-logo`}></use>
          </svg>
        </HeaderLogo>
        <HeaderLinkList>
          <HeaderLinkItem>
            <OpenMenuBtn type="button" onClick={() => setShowMenu(true)}>
              Menu
            </OpenMenuBtn>
          </HeaderLinkItem>
          <HeaderLinkItem>
            <HeaderLink type="button">
              <svg width={16} height={16}>
                <use href={`${sprite}#icon-discord-logo`}></use>
              </svg>
            </HeaderLink>
          </HeaderLinkItem>
          <HeaderLinkItem>
            <HeaderLink type="button">
              <svg width={16} height={16}>
                <use href={`${sprite}#icon-ship`}></use>
              </svg>
            </HeaderLink>
          </HeaderLinkItem>
          <HeaderLinkItem>
            <HeaderLink type="button">
              <svg width={16} height={16}>
                <use href={`${sprite}#icon-twitter-logo`}></use>
              </svg>
            </HeaderLink>
          </HeaderLinkItem>
        </HeaderLinkList>
      </HeaderContainer>
      {showMenu && <MobileMenu onClose={() => setShowMenu(false)} />}
    </HeaderSection>
  );
};

export default Header;
