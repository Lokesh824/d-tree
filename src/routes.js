import Dashboard from "./views/Dashboard/Dashboard";

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
];

export default routes;
