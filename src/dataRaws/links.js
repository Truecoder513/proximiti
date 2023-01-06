import { Icone } from "../ui-kits/kits";

export const dashboardLinks = [
  {
    route: "/",
    label: (
      <>
        <Icone icon="DashboardIcon.svg" alt="icon" />
        Accueil
      </>
    ),
  },
  {
    route: "/consultation",
    label: (
      <>
        <Icone icon="VideoIcon.svg" alt="icon" />
        Consultation Vidéo
      </>
    ),
  },
  {
    route: "/histories",
    label: (
      <>
        <Icone icon="HistoryIcon.svg" alt="icon" />
        Historique
      </>
    ),
  },
  {
    route: "/meeting",
    label: (
      <>
        <Icone icon="Meeting.svg" alt="icon" />
        Mes rendez-vous
      </>
    ),
  },
  {
    route: "/documents",
    label: (
      <>
        <Icone icon="DocumentIcon.svg" alt="icon" />
        Mes documents
      </>
    ),
  },
  {
    route: "status",
    label: (
      <>
        <Icone icon="StatusIcon.svg" alt="icon" />
        Etats des lieux
      </>
    ),
  },
];
