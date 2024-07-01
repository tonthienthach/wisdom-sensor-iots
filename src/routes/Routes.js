import configRoutes from "../config/configRoutes";
import LayoutMain from "../layout/layout-main/LayoutMain";
import Home from "../pages/home/Home";

import RegisterPage from "../pages/user/register/Register";
import LoginPage from './../pages/login/Login';
import ChangePasswordPage from "../pages/user/changePassword/ChangePasswordPage";
import CustomerDetail from "../pages/customer/customer_detail";
import CustomerOrder from "../pages/customer/customer_order";
import CustomerList from "../pages/customer/customer_list";
import ContractDetail from "../pages/contract/contract_detail";
import ContractList from "../pages/contract/contract_list";
import OrderEmployee from "../pages/order/order_employee";
import OrderDetailEmployee from "../pages/order/order_detail_employee";
import OrderList from "../pages/order/order_list";



const mainRoutes = [
  { path: configRoutes.home, component: Home, layout: LayoutMain },
  {path: configRoutes.loginUser, component: LoginPage, layout: LayoutMain},
  {path: configRoutes.registerUser, component: RegisterPage, layout: LayoutMain}, 
  {path: configRoutes.changePassword, component: ChangePasswordPage, layout: LayoutMain},
  {path: configRoutes.customerDetail, component: CustomerDetail, layout: LayoutMain},
  {path: configRoutes.customerOrder, component: CustomerOrder, layout: LayoutMain},
  {path: configRoutes.customerList, component : CustomerList, layout: LayoutMain},
  {path: configRoutes.ContractDetail,component : ContractDetail, layout: LayoutMain},
  {path: configRoutes.ContractList,component : ContractList, layout: LayoutMain},
  {path: configRoutes.OrderEmployee,component : OrderEmployee, layout: LayoutMain},
  {path: configRoutes.OrderDetailEmployee,component : OrderDetailEmployee, layout: LayoutMain},
  {path: configRoutes.OrderList,component : OrderList, layout: LayoutMain},
];

export default mainRoutes;
