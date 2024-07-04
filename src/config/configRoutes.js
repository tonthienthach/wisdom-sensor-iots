import OrderDetailEmployee from "../pages/order/order_detail_employee";

const configRoutes = {
  home: "/",
  loginUser: "/user/login",
  registerUser: "/user/register", 
  forgotPassword: "/user/forgot-password", 
  verifyEmail: "/user/verify-email",
  changePassword: "/user/change-password",
// minh nghia
  customerDetail: "/customer/customer-detail" ,
  customerOrder : "/customer/customer-order",
  customerList : "/customer/customer-list",
  ContractDetail : "/contract/contract-detail",
  ContractList : "/contract/contract-list",
  OrderEmployee : "/order/order-employee",
  OrderDetailEmployee : "/order/order-detail-employee",
  OrderList : "/order/order-list",
// thinh doan
  promotionList: "/admin/promotion-list",
  promotionAdd: "/admin/promotion-add",
  promotionUpdate: "/admin/promotion-update", 
  promotionDetail: "/admin/promotion-detail", 
  serviceAddAdmin: "/admin/service-add", 
  serviceListAdmin: "/admin/service-list", 
  serviceDetailAdmin: "/admin/service-detail", 
  serviceUpdateAdmin: "/admin/service-update", 

};

export default configRoutes;
