import { createBrowserRouter } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { Dashboard } from "./pages/Dashboard";
import { ProjectList } from "./pages/ProjectList";
import { ProjectDetail } from "./pages/ProjectDetail";
import { CreateProject } from "./pages/CreateProject";
import { ArticleList } from "./pages/ArticleList";
import { ArticleDetail } from "./pages/ArticleDetail";
import { Activities } from "./pages/Activities";
import { Achievements } from "./pages/Achievements";
import { Gallery } from "./pages/Gallery";
import { Settings } from "./pages/Settings";
import { WorkspaceSettings } from "./pages/WorkspaceSettings";
import { AccountSettings } from "./pages/AccountSettings";
import { Templates } from "./pages/Templates";
import { PublicPortfolio } from "./pages/PublicPortfolio";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/templates",
    Component: Templates,
  },
  {
    path: "/portfolio/:username",
    Component: PublicPortfolio,
  },
  {
    path: "/app",
    Component: DashboardLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: "projects", Component: ProjectList },
      { path: "projects/:id", Component: ProjectDetail },
      { path: "projects/new", Component: CreateProject },
      { path: "projects/:id/edit", Component: CreateProject },
      { path: "articles", Component: ArticleList },
      { path: "articles/:id", Component: ArticleDetail },
      { path: "activities", Component: Activities },
      { path: "achievements", Component: Achievements },
      { path: "gallery", Component: Gallery },
      { path: "settings", Component: Settings },
      { path: "workspace", Component: WorkspaceSettings },
      { path: "account", Component: AccountSettings },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);