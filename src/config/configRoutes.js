import OrderDetailEmployee from "../pages/order/order_detail_employee";

const configRoutes = {
  home: "/",
  loginUser: "/user/login",
  registerUser: "/user/register",
  forgotPassword: "/user/forgot-password",
  verifyEmail: "/user/verify-email",
  changePassword: "/user/change-password",
  //thach
  myAccount: "/user/my-account",
  myPurchase: "/user/my-purchase",
  myPurchaseDetail: "/user/my-purchase-detail",
  myPromotion: "/user/my-promotion",
  myContract: "/user/my-contract",
  myContractDetail: "/user/my-contract-detail",
  helpCenter: "/user/help-center",
  notification: "/user/notification",

//dat
  serviceList: "/user/service-list",
  serviceDetail: "/user/service-detail",
  registerService: "/user/register-service",
  invoiceService: "/user/invoice-service",
  mypurchaseProcessing: "/user/mypurchase-processing",
  mypurchaseComplete: "/user/mypurchase-complete",

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
