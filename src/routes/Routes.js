import configRoutes from "../config/configRoutes";
import LayoutMain from "../layout/layout-main/LayoutMain";
import Home from "../pages/home/Home";

import RegisterPage from "../pages/user/register/Register";
import LoginPage from "./../pages/login/Login";
import ChangePasswordPage from "../pages/user/changePassword/ChangePasswordPage";
import MyPurchase from "../pages/user/my-purchase/MyPurchase";
import MyPurchaseDetail from "../pages/user/my-purchase/MyPurchaseDetail";
import MyPromotion from "../pages/user/my-promotion/MyPromotion";
import MyContract from "../pages/user/my-contract/MyContract";
import MyContractDetail from "../pages/user/my-contract/MyContractDetail";
import HelpCenter from "../pages/user/helpCenter/HelpCenter";
import Notification from "../pages/user/notification/Notification";
import MyAccount from "../pages/user/my-account/MyAccount";

const mainRoutes = [
  { path: configRoutes.home, component: Home, layout: LayoutMain },
  { path: configRoutes.loginUser, component: LoginPage, layout: LayoutMain },
  {
    path: configRoutes.registerUser,
    component: RegisterPage,
    layout: LayoutMain,
  },
  {
    path: configRoutes.changePassword,
    component: ChangePasswordPage,
    layout: LayoutMain,
  },
  { path: configRoutes.myAccount, component: MyAccount, layout: LayoutMain },
  { path: configRoutes.myPurchase, component: MyPurchase, layout: LayoutMain },
  {
    path: configRoutes.myPurchaseDetail,
    component: MyPurchaseDetail,
    layout: LayoutMain,
  },
  {
    path: configRoutes.myPromotion,
    component: MyPromotion,
    layout: LayoutMain,
  },
  { path: configRoutes.myContract, component: MyContract, layout: LayoutMain },
  {
    path: configRoutes.myContractDetail,
    component: MyContractDetail,
    layout: LayoutMain,
  },
  { path: configRoutes.helpCenter, component: HelpCenter, layout: LayoutMain },
  {
    path: configRoutes.notification,
    component: Notification,
    layout: LayoutMain,
  },
];

export default mainRoutes;
