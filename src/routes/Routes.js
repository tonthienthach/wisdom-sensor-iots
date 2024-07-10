import configRoutes from "../config/configRoutes";
import LayoutMain from "../layout/layout-main/LayoutMain";
import Home from "../pages/home/Home";

import RegisterPage from "../pages/user/register/Register";
import ChangePasswordPage from "../pages/user/changePassword/ChangePasswordPage";

import ChangePasswordAdmin from "../pages/admin/changepassword/changepassword";
import LoginAdmin from "../pages/admin/login/login";
import ForgotPasswordAdmin from "../pages/admin/forgotpassword/forgotpassword";
import Verifyemail from "../pages/admin/verifyemail/verifyemail"

import addemployee from"../pages/admin/employee/add_employee";
import listemplyee from "../pages/admin/employee/list_employee";
import detailemployee from "../pages/admin/employee/detail_employee";
import Editemployee from "../pages/admin/employee/edit_employee";


const mainRoutes = [
  { path: configRoutes.home, component: Home, layout: LayoutMain },
  {path: configRoutes.registerUser, component: RegisterPage, layout: LayoutMain}, 
  {path: configRoutes.changePassword, component: ChangePasswordPage, layout: LayoutMain},
  {path: configRoutes.ChangePasswordAdmin, component: ChangePasswordAdmin,layout:LayoutMain},
  {path: configRoutes.LoginAdmin, component: LoginAdmin,layout:LayoutMain},
  {path: configRoutes.ForgotPasswordAdmin, component: ForgotPasswordAdmin,layout:LayoutMain},
  {path: configRoutes.Verifyemail, component: Verifyemail,layout:LayoutMain},

  {path: configRoutes.addemployee, component: addemployee,layout:LayoutMain},
  {path: configRoutes.listemplyee, component: listemplyee,layout:LayoutMain},
  {path: configRoutes.detailemployee, component: detailemployee,layout:LayoutMain},
  {path: configRoutes.Editemployee, component: Editemployee,layout:LayoutMain}
];

export default mainRoutes;
