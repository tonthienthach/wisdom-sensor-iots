import configRoutes from "../config/configRoutes";
import LayoutMain from "../layout/layout-main/LayoutMain";
import Home from "../pages/home/Home";
import RegisterPage from "../pages/user/register/Register";
import LoginPage from './../pages/login/Login';
import ChangePasswordPage from "../pages/user/changePassword/ChangePasswordPage";
//employee
import LayoutEmployee from "../layout/layout-employee/LayoutEmployee";
import ChangePassword from "../pages/employee/change_yourpassword/change_yourpassword";
import ForgotPassword from "../pages/employee/forgot_password/forgot_password";
import Login from "../pages/employee/login/login";
import OrderDetail from "../pages/employee/order/order_detail_review";
import OrderListReview from "../pages/employee/order/order_list_review";
import VerifyEmail from "../pages/employee/verify_email/verify_email";



const mainRoutes = [
  { path: configRoutes.home, component: Home, layout: LayoutMain },
  { path: configRoutes.loginUser, component: LoginPage, layout: LayoutMain },
  { path: configRoutes.registerUser, component: RegisterPage, layout: LayoutMain }, 
  { path: configRoutes.changePassword, component: ChangePasswordPage, layout: LayoutMain },
  //employee
  { path: configRoutes.changePasswordEmployee, component: ChangePassword, layout: LayoutEmployee },
  { path: configRoutes.forgotPasswordEmployee, component: ForgotPassword, layout: LayoutEmployee },
  { path: configRoutes.loginEmployee, component: Login, layout: LayoutEmployee },
  { path: configRoutes.orderDetail, component: OrderDetail, layout: LayoutEmployee },
  { path: configRoutes.orderListReview, component: OrderListReview, layout: LayoutEmployee },
  { path: configRoutes.verifyEmailEmployee, component: VerifyEmail, layout: LayoutEmployee }
];

export default mainRoutes;