import configRoutes from "../config/configRoutes";
import LayoutMain from "../layout/layout-main/LayoutMain";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";

const mainRoutes = [
  { path: configRoutes.home, component: Home, layout: LayoutMain },
  { path: configRoutes.login, component: Login, layout: null },
];

export default mainRoutes;
