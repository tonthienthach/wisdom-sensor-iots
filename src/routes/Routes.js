import configRoutes from '../config/configRoutes'
import LayoutMain from '../layout/layout-main/LayoutMain'
import Home from '../pages/home/Home'
import RegisterPage from '../pages/user/register/Register'
import ForgotPassword from '../pages/user/forgotPassword/forgotPassword'
import VerifyEmail from '../pages/user/verifyEmail/verifyEmail'
import NotFound from './../pages/pageNotFound/notFound'
import Login from '../pages/user/login/Login'

import LayoutMainSetting from '../layout/layout_main_setting/layoutMainSetting'

import LayoutMainAdmin from '../layout/layout_main_admin/layout_main_admin'
import LoginPage from './../pages/user/login/Login'
import ChangePasswordPage from '../pages/user/changePassword/ChangePasswordPage'
import MyPurchase from '../pages/user/my-purchase/MyPurchase'
import MyPurchaseDetail from '../pages/user/my-purchase/MyPurchaseDetail'
import MyPromotion from '../pages/user/my-promotion/MyPromotion'
import MyContract from '../pages/user/my-contract/MyContract'
import MyContractDetail from '../pages/user/my-contract/MyContractDetail'
import HelpCenter from '../pages/user/helpCenter/HelpCenter'
import Notification from '../pages/user/notification/Notification'
import MyAccount from '../pages/user/my-account/MyAccount'
import ServiceListPage from '../pages/user/service/Servicelist'
import ServiceDetailPage from '../pages/user/service/Servicedetail'
import RegisterServicePage from '../pages/user/service/Registerservice'
import InvoiceServicePage from '../pages/user/service/Invoiceservice'
import MyPurchaseProcessingPage from '../pages/user/mypurchase/Mypurchaseprocessing'
import MyPurchaseCompletePage from '../pages/user/mypurchase/Mypurchasecomplete'
import MyPurchaseReviewPage from '../pages/user/mypurchase/Mypurchasereview'
import CustomerDetail from '../pages/customer/customer_detail'
import CustomerOrder from '../pages/customer/customer_order'
import CustomerList from '../pages/customer/customer_list'
import ContractDetail from '../pages/contract/contract_detail'
import ContractList from '../pages/contract/contract_list'
import OrderEmployee from '../pages/order/order_employee'
import OrderDetailEmployee from '../pages/order/order_detail_employee'
import OrderList from '../pages/order/order_list'
import PromotionList from '../pages/admin/promotion/list_promotion'
import PromotionAdd from '../pages/admin/promotion/add_promotion'
import PromotionUpdate from '../pages/admin/promotion/update_promotion'
import PromotionDetail from '../pages/admin/promotion/detail_promotion'
import ServiceAddAdmin from '../pages/admin/service-pack/add_service'
import ServiceListAdmin from '../pages/admin/service-pack/list_service'
import DetailServiceAdmin from '../pages/admin/service-pack/detail_service'
import UpdateServiceAdmin from '../pages/admin/service-pack/update_service'
//setting
import ChangeYourPasswordSetting from '../pages/setting/change_yourpassword'
import LoginSetting from '../pages/setting/login'
import ForgotPasswordSetting from '../pages/setting/forgot_password'
import VerifyEmailSetting from '../pages/setting/verity_email'
import OrderListSetting from '../pages/setting/order_list'
import OrderListDetailSetting from '../pages/setting/order_list_review'
//admin
import LoginAdmin from '../pages/admin/login/login_admin'
import VerityEmailAdmin from '../pages/admin/verity_email_admin/verity_email_admin'
import ChangePasswordAdmin from '../pages/admin/change_password/change_password'
import AddEmployeeAdmin from '../pages/admin/employee/add_employee'

 

const mainRoutes = [
    //user
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
    {
        path: configRoutes.forgotPassword,
        component: ForgotPassword,
        layout: LayoutMain,
    },
    {
        path: configRoutes.serviceList,
        component: ServiceListPage,
        layout: LayoutMain,
    },
    {
        path: configRoutes.serviceDetail,
        component: ServiceDetailPage,
        layout: LayoutMain,
    },
    {
        path: configRoutes.registerService,
        component: RegisterServicePage,
        layout: LayoutMain,
    },
    {
        path: configRoutes.invoiceService,
        component: InvoiceServicePage,
        layout: LayoutMain,
    },
    {
        path: configRoutes.mypurchaseProcessing,
        component: MyPurchaseProcessingPage,
        layout: LayoutMain,
    },
    {
        path: configRoutes.mypurchaseComplete,
        component: MyPurchaseCompletePage,
        layout: LayoutMain,
    },
    {
        path: configRoutes.mypurchaseReview,
        component: MyPurchaseReviewPage,
        layout: LayoutMain,
    },
//setting
    {
        path: configRoutes.changeYourPasswordSetting,
        component: ChangeYourPasswordSetting,
        layout: LayoutMainSetting,
    },
    {
        path: configRoutes.loginSetting,
        component: LoginSetting,
        layout: LayoutMainSetting,
    },
    {
        path: '/setting/forgot-password',
        component: ForgotPasswordSetting,
        layout: LayoutMainSetting,
    },
    {
        path: '/setting/verity-email',
        component: VerifyEmailSetting,
        layout: LayoutMainSetting,
    },
    {
        path: configRoutes.orderListSetting,
        component: OrderListSetting,
        layout: LayoutMain,
    },
    {
        path: configRoutes.orderListDetailSetting,
        component: OrderListDetailSetting,
        layout: LayoutMain,
    },
    //admin
    {
        path: '/admin/login',
        component: LoginAdmin,
        layout: LayoutMainAdmin,
    },
    {
        path: '/admin/verity-email',
        component: VerityEmailAdmin,
        layout: LayoutMainAdmin,
    },
    {
        path: '/admin/change-password',
        component: ChangePasswordAdmin,
        layout: LayoutMainAdmin,
    },
    {
        path: configRoutes.addEmployeeAdmin,
        component: AddEmployeeAdmin,
        layout: LayoutMainAdmin,
    },


    //minh nghia
    {
        path: configRoutes.customerDetail,
        component: CustomerDetail,
        layout: LayoutMain,
    },
    {
        path: configRoutes.customerOrder,
        component: CustomerOrder,
        layout: LayoutMain,
    },
    {
        path: configRoutes.customerList,
        component: CustomerList,
        layout: LayoutMain,
    },
    {
        path: configRoutes.ContractDetail,
        component: ContractDetail,
        layout: LayoutMain,
    },
    {
        path: configRoutes.ContractList,
        component: ContractList,
        layout: LayoutMain,
    },
    {
        path: configRoutes.OrderEmployee,
        component: OrderEmployee,
        layout: LayoutMain,
    },
    {
        path: configRoutes.OrderDetailEmployee,
        component: OrderDetailEmployee,
        layout: LayoutMain,
    },
    { path: configRoutes.OrderList, component: OrderList, layout: LayoutMain },
    //thinh doan
    {
        path: configRoutes.promotionList,
        component: PromotionList,
        layout: LayoutMainAdmin,
    },
    {
        path: configRoutes.promotionAdd,
        component: PromotionAdd,
        layout: LayoutMainAdmin,
    },
    {
        path: configRoutes.promotionUpdate,
        component: PromotionUpdate,
        layout: LayoutMainAdmin,
    },
    {
        path: configRoutes.promotionDetail,
        component: PromotionDetail,
        layout: LayoutMainAdmin,
    },
    {
        path: configRoutes.serviceAddAdmin,
        component: ServiceAddAdmin,
        layout: LayoutMainAdmin,
    },
    {
        path: configRoutes.serviceListAdmin,
        component: ServiceListAdmin,
        layout: LayoutMainAdmin,
    },
    {
        path: configRoutes.serviceDetailAdmin,
        component: DetailServiceAdmin,
        layout: LayoutMainAdmin,
    },
    {
        path: configRoutes.serviceUpdateAdmin,
        component: UpdateServiceAdmin,
        layout: LayoutMainAdmin,
    }, // New route
    {
        path: configRoutes.changePassword,
        component: ChangePasswordPage,
        layout: LayoutMain,
    },
    { path: configRoutes.myAccount, component: MyAccount, layout: LayoutMain },
    {
        path: configRoutes.myPurchase,
        component: MyPurchase,
        layout: LayoutMain,
    },
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
    {
        path: configRoutes.myContract,
        component: MyContract,
        layout: LayoutMain,
    },
    {
        path: configRoutes.myContractDetail,
        component: MyContractDetail,
        layout: LayoutMain,
    },
    {
        path: configRoutes.helpCenter,
        component: HelpCenter,
        layout: LayoutMain,
    },
    {
        path: configRoutes.notification,
        component: Notification,
        layout: LayoutMain,
    },


]
export default mainRoutes
