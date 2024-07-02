import configRoutes from "../config/configRoutes";
import LayoutMain from "../layout/layout-main/LayoutMain";
import Home from "../pages/home/Home";
import LayoutMainAdmin from "../layout/layout_main_admin/layout_main_admin"; // Correct import

import RegisterPage from "../pages/user/register/Register";
import LoginPage from './../pages/login/Login';
import ChangePasswordPage from "../pages/user/changePassword/ChangePasswordPage";
import PromotionList from "../pages/admin/promotion/list_promotion"; 
import PromotionAdd from "../pages/admin/promotion/add_promotion"; 
import PromotionUpdate from "../pages/admin/promotion/update_promotion"; 
import PromotionDetail from "../pages/admin/promotion/detail_promotion"; 
import ServiceAddAdmin from "../pages/admin/service-pack/add_service"; 
import ServiceListAdmin from "../pages/admin/service-pack/list_service"; 
import DetailServiceAdmin from "../pages/admin/service-pack/detail_service";
import UpdateServiceAdmin from "../pages/admin/service-pack/update_service";



const mainRoutes = [
  { path: configRoutes.home, component: Home, layout: LayoutMain },
  {path: configRoutes.loginUser, component: LoginPage, layout: LayoutMain},
  {path: configRoutes.registerUser, component: RegisterPage, layout: LayoutMain}, 
  {path: configRoutes.changePassword, component: ChangePasswordPage, layout: LayoutMain},
  { path: configRoutes.promotionList, component: PromotionList, layout: LayoutMainAdmin },
  { path: configRoutes.promotionAdd, component: PromotionAdd, layout: LayoutMainAdmin },
  { path: configRoutes.promotionUpdate, component: PromotionUpdate, layout: LayoutMainAdmin },
  { path: configRoutes.promotionDetail, component: PromotionDetail, layout: LayoutMainAdmin },
  { path: configRoutes.serviceAddAdmin, component: ServiceAddAdmin, layout: LayoutMainAdmin },
  { path: configRoutes.serviceListAdmin, component: ServiceListAdmin, layout: LayoutMainAdmin },
  { path: configRoutes.serviceDetailAdmin, component: DetailServiceAdmin, layout: LayoutMainAdmin },
  { path: configRoutes.serviceUpdateAdmin, component: UpdateServiceAdmin, layout: LayoutMainAdmin }, // New route


];

export default mainRoutes;
