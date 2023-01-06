// ---------------- compte et services ----------------------

import { Img } from "../ui-kits/kits";

export const compteServiceHead = [
  {
    name: "id",
    label: "#",
  },
  {
    name: "date",
    label: "Dates",
  },
  {
    name: "account",
    label: "Comptes",
  },
  {
    name: "services",
    label: "Services",
  },
  {
    name: "sold",
    label: "Solde",
  },
  {
    name: "emptyLabel",
    label: "",
  },
];

export const compteServiceBody = [
  {
    id: 1,
    date: "25/02/2020",
    account: "Fuites d'eau sur évier",
    services: "Main d'oeuvres",
    sold: "-50£",
    emptyLabel: "Renouveler intervention",
  },
  {
    id: 2,
    date: "31/01/2020",
    account: "Fournitures",
    services: "Robinet Mitigeur",
    sold: "-80£",
    emptyLabel: "",
  },
  {
    id: 3,
    date: "09/07/20202",
    account: "Déplacement",
    services: "Technicien",
    sold: "-50£",
    emptyLabel: "Abonnement Silver",
  },
  {
    id: 4,
    date: "12/01/20202",
    account: "Total",
    services: "",
    sold: " 180£",
    emptyLabel: "Paiement par carte",
  },
  {
    id: 5,
    date: "12/01/20202",
    account: "Solde compte",
    services: "",
    sold: "200£",
    emptyLabel: "",
  },
];

// ----------------------------------  formation ---------------------------
export const formationHead = [
  {
    name: "couverture",
    label: "Couverture",
  },
  {
    name: "emptyLabel1",
    label: "",
  },
  {
    name: "emptyLabel2",
    label: "",
  },
  {
    name: "residence",
    label: "Résidences principale",
  },
  {
    name: "emptyLabel3",
    label: "",
  },
  {
    name: "emptyLabel4",
    label: "",
  },
  {
    name: "emptyLabel5",
    label: "",
  },
  {
    name: "emptyLabel6",
    label: "",
  },
];

export const formationBody = [
  {
    couverture: "25/02/2020",
    emptyLabel1: "Axa assurance",
    emptyLabel2: "Tout corps d'état",
    residence: "1 rue François Bonamy",
    emptyLabel3: "10£",
    emptyLabel4: "Mensuel",
    emptyLabel5: "Oui",
    emptyLabel6: <a href="">Télécharger Attestation</a>,
  },
  {
    couverture: "31/01/2020",
    emptyLabel1: "Natixis",
    emptyLabel2: "Assuarance vie",
    residence: "",
    emptyLabel3: "",
    emptyLabel4: "",
    emptyLabel5: "",
    emptyLabel6: <a href="">Conseil Patrimonial</a>,
  },
];

// --------------------------- facture -------------------------
export const factureHead = [
  {
    name: "date",
    label: "Dates",
  },
  {
    name: "number",
    label: "Numéro Ticket",
  },
  {
    name: "activities",
    label: "Activités",
  },
  {
    name: "amount",
    label: "Montant",
  },
  {
    name: "action",
    label: "Actions",
  },
];

export const factureBody = [
  {
    date: "08/01/2022",
    number: "Tickets #001",
    activities: "Facture-fuite d'eau sur évier",
    amount: "180£",
    action: "Imprimer/Partager",
  },
  {
    date: "08/01/2022",
    number: "Tickets #001",
    activities: "Devis",
    amount: "180£",
    action: "Imprimer/Partager",
  },
];

// ------------------------ avis -----------------------
export const avisHead = [
  {
    name: "date",
    label: "08/01/2022",
  },
  {
    name: "ticket",
    label: "Ticket",
  },
  {
    name: "avis",
    label: "Avis",
  },
  {
    name: "add",
    label: "Ajouter en favoris",
  },
  {
    name: "comment",
    label: "Commentaires",
  },
  {
    name: "setSav",
    label: "Activer le SAV",
  },
];

export const avisBody = [
  {
    date: "08/01/2022",
    ticket: "Fuite d'eau sur évier",
    avis: "Je recommande",
    add: "Oui",
    comment: "Intervention Rapide",
    setSav: "Non",
  },
  {
    date: "08/01/2022",
    ticket: "Fuite d'eau sur évier",
    avis: "Je recommande",
    add: "Oui",
    comment: "Intervention Rapide",
    setSav: "Non",
  },
];

// --------------------- projet --------------------
export const projectHead = [
  {
    name: "label",
    label: "Intitulé",
  },
  {
    name: "localisation",
    label: "Localisation",
  },
  {
    name: "project",
    label: "Projet",
  },
  {
    name: "statut",
    label: "Statut",
  },
  {
    name: "worker",
    label: "Prestataire Retenu",
  },
  {
    name: "deadline",
    label: "Echéance",
  },
];
export const projectBody = [
  {
    label: "Travaux Extérieur ",
    localisation: "1 rue François Bonamy, Paris 16",
    project: "Refaire canalisation extérieur",
    statut: "En attente de devis",
    worker: "Brisson dépannage multiservice",
    deadline: "10/02/2022",
  },
  {
    label: "Prêt",
    localisation: "1 rue François Bonamy, Paris 16",
    project: "Achat résidence secondaire",
    statut: "Prêt Bancaire",
    worker: "Courtier Patrimonium",
    deadline: "04/05/2023",
  },
  {
    label: "Défiscalisation",
    localisation: "1 rue François Bonamy, Paris 16",
    project: "Propriétaire - Résidence principale",
    statut: "",
    worker: "Conseil patrimonial",
    deadline: "En cours",
  },
];

// ---------------------- mes offres -----------------------
export const offerHead = [
  {
    name: "owner",
    label: "Titulaire",
  },
  {
    name: "localisation",
    label: "Adresse",
  },
  {
    name: "home",
    label: "Résidence ",
  },
  {
    name: "price",
    label: "Valeur",
  },
  {
    name: "old",
    label: "Ancienneté",
  },
  {
    name: "subscribe",
    label: "Abonnements",
  },
];
export const offerBody = [
  {
    owner: "M. ou Mme Dubois ",
    localisation: "1 rue François Bonamy, Paris 16",
    home: "Propriétaire - Résidence principale",
    price: "180.000 ",
    old: "Depuis 1976",
    subscribe: "Gold",
  },
  {
    owner: "M. ou Mme Dubois",
    localisation: "1 rue François Bonamy, Paris 16",
    home: "Propriétaire - Résidence principale",
    price: "180.000 ",
    old: "Depuis 1976",
    subscribe: "Gold",
  },
];

// --------------------- dernières interventions ------------------
export const lastWorkHead = [
  {
    name: "date",
  },
  {
    name: "ticket",
  },
  {
    name: "work",
  },
  {
    name: "price",
  },
  {
    name: "workerName",
  },
  {
    name: "actions",
  },
];

export const lastWorkBody = [
  {
    date: "08/01/2022",
    ticket: "Ticket #001",
    work: "Fuite sous chaudière",
    price: "180 €",
    workerName: "Stéphane Multiservices",
    actions: "Imprimer/Partager",
  },
  {
    date: "08/01/2022",
    ticket: "Ticket #001",
    work: "Facture – Fuite d’eau sur évier",
    price: "220 €",
    workerName: "Engie Home Service",
    actions: "Imprimer/Partager",
  },
];

// ------------------------  messages -----------------------
export const messages = [
  <div className="messages">
    <Img img="Avatar.png" alt="avatar" />
    <div>
      <h3>Clifford Hale</h3>
      <p>
        Salut frère tu te moques de moi maintenant? avez-vous manqué
        l'université?…
      </p>
      <p>2 hours ago</p>
    </div>
  </div>,
  <div className="messages">
    <Img img="Avatar (1).png" alt="avatar" />
    <div>
      <h3>Lottie Marsh</h3>
      <p>Mon pote, c'est pour acheter de la glace à ton fils, ne joue pas !!</p>
      <p>3 hours ago</p>
    </div>
  </div>,
  <div className="messages">
    <Img img="Avatar (2).png" alt="avatar" />
    <div>
      <h3>BTC</h3>
      <p>Bitcoin vient de renforcer 5 points si je ne me trompe pas tu sais</p>
      <p>3 hours ago</p>
    </div>
  </div>,
  <div className="messages">
    <Img img="Avatar (3).png" alt="avatar" />
    <div>
      <h3>Clifford Hale</h3>
      <p>Demain n'oubliez pas de mabar minecraft</p>
      <p>2 hours ago</p>
    </div>
  </div>,
];
