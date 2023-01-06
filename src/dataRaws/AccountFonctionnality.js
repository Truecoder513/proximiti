import { Card, Img } from "../ui-kits/kits";
import { TableofData } from "../ui-kits/table";
import {
  avisBody,
  avisHead,
  compteServiceBody,
  compteServiceHead,
  factureBody,
  factureHead,
  formationBody,
  formationHead,
  lastWorkBody,
  lastWorkHead,
  messages,
  offerBody,
  offerHead,
  projectBody,
  projectHead,
} from "./FonctionnalityMenuModalContent";

export const AccountFonctionnality = [
  {
    label: "COMPTES ET SERVICES",
    img: <Img img="1.png" alt="fonctionnatlity" />,
    modalContent: (
      <TableofData
        tableHead={compteServiceHead}
        tableBody={compteServiceBody}
      />
    ),
  },
  {
    label: "FORMATIONS / LABELS ET CERTIFICATIONS",
    label2: "MES ASSURANCES",
    img: <Img img="2.png" alt="fonctionnatlity" />,
    modalContent: (
      <TableofData tableHead={formationHead} tableBody={formationBody} />
    ),
  },
  {
    label: "FACTURE / DEVIS",
    label2: "FACTURE",
    img: <Img img="3.png" alt="fonctionnatlity" />,
    modalContent: (
      <TableofData tableHead={factureHead} tableBody={factureBody} />
    ),
  },
  {
    label: "MES MESSAGES",
    img: <Img img="4.png" alt="fonctionnatlity" />,
    modalContent: <Card title={"MES MESSAGES"} cardData={messages} />,
  },
  {
    label: "MES AVIS",
    img: <Img img="5.png" alt="fonctionnatlity" />,
    modalContent: <TableofData tableHead={avisHead} tableBody={avisBody} />,
  },
  {
    label: "MA COMPTABILITÉ",
    label2: "PROJETS",
    img: <Img img="6.png" alt="fonctionnatlity" />,
    modalContent: (
      <TableofData tableHead={projectHead} tableBody={projectBody} />
    ),
  },
  {
    label: "MES OFFRES",
    img: <Img img="7.png" alt="fonctionnatlity" />,
    img2: <Img img="9.png" alt="fonctionnatlity" />,
    modalContent: <TableofData tableHead={offerHead} tableBody={offerBody} />,
  },
  {
    label: "CHIFFRES D'AFFAIRES",
    label2: "DERNIERES INTERVENTIONS",
    img: <Img img="8.png" alt="fonctionnatlity" />,
    modalContent: (
      <TableofData tableHead={lastWorkHead} tableBody={lastWorkBody} />
    ),
  },
];
