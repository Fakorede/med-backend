// layouts
const BlankLayout = () => import("../layouts/BlankLayout")
const DashboardLayout = () => import("../layouts/DashboardLayout")

// auth
const Login = () => import('../views/auth/Login')
const RecoverPassword = () => import('../views/auth/RecoverPassword')
const ResetPassword = () => import('../views/auth/ResetPassword')
const ConfirmMail = () => import('../views/auth/ConfirmMail')

// views
const Dashboard = () => import('../views/backend/Dashboard')

// users
const Admins = () =>import('../views/backend/users/Admins')
const Clients = () =>import('../views/backend/users/Clients')
const Riders = () =>import('../views/backend/users/Riders')

// const UpdateProfile = () =>import('../views/backend/users/UpdateProfile')
const UpdatePassword = () =>import('../views/backend/users/UpdatePassword')

// orders
const OrderList = () =>import('../views/backend/orders/OrderList')
const OrderView = () =>import('../views/backend/orders/OrderView')

// 404
const Error404 = () => import('../views/Error404')

const childRoutes = () => [
  {
    path: '',
    name: 'app.dashboard',
    meta: {  name: 'Dashboard' },
    component: Dashboard
  },
  {
    path: 'admins',
    name: 'app.admins',
    meta: {  name: 'admins' },
    component: Admins
  },
  {
    path: 'clients',
    name: 'app.clients',
    meta: {  name: 'clients' },
    component: Clients
  },
  {
    path: 'riders',
    name: 'app.riders',
    meta: {  name: 'riders' },
    component: Riders
  },
  {
    path: 'update-password',
    name: 'app.user-password-update',
    meta: {  name: 'user-password-update' },
    component: UpdatePassword
  },
  // {
  //   path: 'update-profile',
  //   name: 'app.profile-update',
  //   meta: {  name: 'profile-update' },
  //   component: UpdateProfile
  // },
  {
    path: 'order-list',
    name: 'app.order-list',
    meta: {  name: 'order-list' },
    component: OrderList
  },
  {
    path: 'order/:id/view',
    name: 'app.order-view',
    meta: {  name: 'order-view' },
    component: OrderView
  },
]

const routes = [
  {
    path: '/',
    name: '',
    component: DashboardLayout,
    children: childRoutes(),
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: '',
    component: BlankLayout,
    children: [
      {
        path: '',
        name: 'auth.login',
        meta: {  name: 'Login' },
        component: Login,
      },
    ]
  },
  {
    path: '/password/recover',
    name: '',
    component: BlankLayout,
    children: [
      {
        path: '',
        name: 'auth.recover-password',
        meta: {  name: 'Recover Password' },
        component: RecoverPassword
      },
    ]
  },
  {
    path: '/password/reset/:token',
    name: '',
    component: BlankLayout,
    children: [
      {
        path: '',
        name: 'auth.reset-password',
        meta: {  name: 'Reset Password' },
        component: ResetPassword
      },
    ]
  },
  {
    path: '/confirm/mail',
    name: '',
    component: BlankLayout,
    children: [
      {
        path: '',
        name: 'auth.confirm-mail',
        meta: {  name: 'Confirm Mail' },
        component: ConfirmMail
      },
    ]
  },
  { path: '*', name: '404', component: Error404 }
]

export default routes;
