import configRoutes from "../config/configRoutes";
import LayoutMain from "../layout/layout-main/LayoutMain";
import Home from "../pages/home/Home";

import RegisterPage from "../pages/user/register/Register";
import LoginPage from './../pages/login/Login';
import ChangePasswordPage from "../pages/user/changePassword/ChangePasswordPage";
import ServiceListPage from "../pages/user/service/Servicelist";
import ServiceDetailPage from "../pages/user/service/Servicedetail";
import RegisterServicePage from "../pages/user/service/Registerservice";
import InvoiceServicePage from "../pages/user/service/Invoiceservice";
import MyPurchaseProcessingPage from "../pages/user/mypurchase/Mypurchaseprocessing";
import MyPurchaseCompletePage from "../pages/user/mypurchase/Mypurchasecomplete";
import MyPurchaseReviewPage from "../pages/user/mypurchase/Mypurchasereview";



const mainRoutes = [
  { path: configRoutes.home, component: Home, layout: LayoutMain },
  {path: configRoutes.loginUser, component: LoginPage, layout: LayoutMain},
  {path: configRoutes.registerUser, component: RegisterPage, layout: LayoutMain}, 
  {path: configRoutes.changePassword, component: ChangePasswordPage, layout: LayoutMain},
  {path: configRoutes.serviceList, component: ServiceListPage, layout: LayoutMain},
  {path: configRoutes.serviceDetail, component: ServiceDetailPage, layout: LayoutMain},
  {path: configRoutes.registerService, component: RegisterServicePage, layout: LayoutMain},
  {path: configRoutes.invoiceService, component: InvoiceServicePage, layout: LayoutMain},
  {path: configRoutes.mypurchaseProcessing, component: MyPurchaseProcessingPage, layout: LayoutMain},
  {path: configRoutes.mypurchaseComplete, component: MyPurchaseCompletePage, layout: LayoutMain},
  {path: configRoutes.mypurchaseReview, component: MyPurchaseReviewPage, layout: LayoutMain}
];

export default mainRoutes;
