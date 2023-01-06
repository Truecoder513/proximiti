import { ButtonWithBackground, Img } from "../ui-kits/kits";

export const stocks = [<p>Robinet</p>, <p>Serrure</p>, <p>Tuyau 30 mm</p>];
export const interventions = [<p>Fuite d’eau le 12/10/21</p>];
export const fournitures = [
  <div className="fournitures">
    <div className="fn-left">
      <Img img="Leroy_Merlin.png" alt="merlin" />
      <p>Leroy Merlin</p>
    </div>
    <ButtonWithBackground label={"Commander"} />
  </div>,
  <div className="fournitures">
    <div className="fn-left">
      <Img img="brico.png" alt="merlin" />
      <p>Brico Dépot</p>
    </div>
    <ButtonWithBackground label={"Commander"} />
  </div>,
  <div className="fournitures">
    <div className="fn-left">
      <Img img="castorama.png" alt="merlin" />
      <p>Castorama</p>
    </div>
    <ButtonWithBackground label={"Commander"} />
  </div>,
];
