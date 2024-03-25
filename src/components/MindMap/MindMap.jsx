import {
  MindMapItem,
  MindMapItemIcon,
  MindMapItemText,
  MindMapItemTitle,
  MindMapList,
  MindMapSection,
} from "./MindMap.styled";
import { Title } from "../../App.styled";
import "pure-react-carousel/dist/react-carousel.es.css";
import MediaQuery from "react-responsive";
import MindMapMobile from "../MindMapMobile/MindMapMobile";
import sprite from "../../img/symbol-defs.svg";

const MindMap = () => {
  return (
    <MindMapSection className="container">
      <Title>MIND MAP</Title>
      <MediaQuery maxWidth={767}>
        <MindMapMobile />
      </MediaQuery>
      <MediaQuery minWidth={767}>
        <MindMapList>
          <MindMapItem>
            <MindMapItemText>
              All owners of APE NFTs and all future collections will receive a
              percentage of sales based on the number of NFTs they own
            </MindMapItemText>
            <MindMapItemTitle>YAPE DROP</MindMapItemTitle>
          </MindMapItem>
          <MindMapItem>
            <MindMapItemText>
              Launch of the 2nd YACHT Collection Releasing the first version of
              the Ape Slam Game
            </MindMapItemText>
            <MindMapItemTitle>New Collection</MindMapItemTitle>
          </MindMapItem>
          <MindMapItem>
            <MindMapItemText>
              Launch your own token, the proceeds of which will go to a global
              fund to LAUNCH YACHT CLUB AND PROMOTE it
            </MindMapItemText>
            <MindMapItemTitle>Token</MindMapItemTitle>
          </MindMapItem>
          <MindMapItem>
            <MindMapItemIcon width={48} height={48}>
              <use href={`${sprite}#icon-arrow`}></use>
            </MindMapItemIcon>
            <MindMapItemTitle> Learn more in mind map</MindMapItemTitle>
          </MindMapItem>
        </MindMapList>
      </MediaQuery>
    </MindMapSection>
  );
};

export default MindMap;
