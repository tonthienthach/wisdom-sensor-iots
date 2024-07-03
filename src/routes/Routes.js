import configRoutes from '../config/configRoutes'
import LayoutMain from '../layout/layout-main/LayoutMain'
import Home from '../pages/home/Home'
import RegisterPage from '../pages/user/register/Register'
import ChangePasswordPage from '../pages/user/changePassword/ChangePasswordPage'
import ForgotPassword from '../pages/user/forgotPassword/forgotPassword'
import VerifyEmail from '../pages/user/verifyEmail/verifyEmail'
import NotFound from './../pages/pageNotFound/notFound'
import Login from '../pages/user/login/Login'

const mainRoutes = [
    { path: configRoutes.home, component: Home, layout: LayoutMain },
    { path: configRoutes.loginUser, component: Login, layout: LayoutMain },
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
    { path: configRoutes.notFound, component: NotFound, layout: LayoutMain },
    {
        path: configRoutes.verifyEmail,
        component: VerifyEmail,
        layout: LayoutMain,
    },
]

export default mainRoutes
