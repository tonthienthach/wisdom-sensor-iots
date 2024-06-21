import configRoutes from "../config/configRoutes";
import LayoutMain from "../layout/layout-main/LayoutMain";
import Home from "../pages/home/Home";

import RegisterPage from "../pages/user/register/Register";
import LoginPage from './../pages/login/Login';
import ChangePasswordPage from "../pages/user/changePassword/ChangePasswordPage";



const mainRoutes = [
  { path: configRoutes.home, component: Home, layout: LayoutMain },
  {path: configRoutes.loginUser, component: LoginPage, layout: LayoutMain},
  {path: configRoutes.registerUser, component: RegisterPage, layout: LayoutMain}, 
  {path: configRoutes.changePassword, component: ChangePasswordPage, layout: LayoutMain}
];

export default mainRoutes;
