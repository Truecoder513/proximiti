import DashboardHome from "../routes/DashboardHome";
import DashboardOtherPage from "../routes/DashboardOtherPage";

export const userConnectedRoutes = [
  { path: "/", element: <DashboardHome /> },
  { path: "/consultation", element: <DashboardOtherPage /> },
  { path: "/histories", element: <DashboardOtherPage /> },
  { path: "/meeting", element: <DashboardOtherPage /> },
  { path: "/documents", element: <DashboardOtherPage /> },
  { path: "/status", element: <DashboardOtherPage /> },
];
