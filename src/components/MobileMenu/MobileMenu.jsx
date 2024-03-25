import sprite from "../../img/symbol-defs.svg";
import Footer from "../Footer/Footer";
import {
  HeaderContainer,
  HeaderLink,
  HeaderLinkList,
} from "../Header/Header.styled";
import {
  CloseMenuBtn,
  MenuIcon,
  MobileMenuContainer,
  MobileMenuLinkItem,
  MobileMenuLogo,
  NavLink,
  NavList,
  NavListItem,
} from "./MobileMenu.styled";

const MobileMenu = ({ onClose }) => {
  return (
    <MobileMenuContainer>
      <HeaderContainer>
        <a href="#hero">
          <MobileMenuLogo width={48} height={32}>
            <use href={`${sprite}#icon-logo`}></use>
          </MobileMenuLogo>
        </a>
        <HeaderLinkList>
          <MobileMenuLinkItem>
            <CloseMenuBtn type="button" onClick={onClose}>
              Close
            </CloseMenuBtn>
          </MobileMenuLinkItem>
          <MobileMenuLinkItem>
            <HeaderLink type="button">
              <MenuIcon width={16} height={16}>
                <use href={`${sprite}#icon-discord-logo`}></use>
              </MenuIcon>
            </HeaderLink>
          </MobileMenuLinkItem>
          <MobileMenuLinkItem>
            <HeaderLink type="button">
              <MenuIcon width={16} height={16}>
                <use href={`${sprite}#icon-ship`}></use>
              </MenuIcon>
            </HeaderLink>
          </MobileMenuLinkItem>
          <MobileMenuLinkItem>
            <HeaderLink type="button">
              <MenuIcon width={16} height={16}>
                <use href={`${sprite}#icon-twitter-logo`}></use>
              </MenuIcon>
            </HeaderLink>
          </MobileMenuLinkItem>
        </HeaderLinkList>
      </HeaderContainer>
      <NavList>
        <NavListItem>
          <NavLink href="#about">ABOUT</NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink href="#mind-map">M-MAP</NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink href="#faq">FAQ</NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink href="#collection">ARTS</NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink href="#mint">MINT</NavLink>
        </NavListItem>
      </NavList>
      <Footer />
    </MobileMenuContainer>
  );
};

export default MobileMenu;
