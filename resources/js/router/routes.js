// layouts
const BlankLayout = () => import("../layouts/BlankLayout")
const DashboardLayout = () => import("../layouts/DashboardLayout")

// auth
const Login = () => import('../views/auth/Login')
const PrivacyPolicy = () => import('../views/PrivacyPolicy')
const RecoverPassword = () => import('../views/auth/RecoverPassword')
const ConfirmMail = () => import('../views/auth/ConfirmMail')
const ResetPassword = () => import('../views/auth/ResetPassword')
const VerifyEmail = () => import('../views/auth/VerifyEmail')

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
const OrderTrack = () => import('../views/backend/orders/OrderTrack')

const ReadNotifications = () =>import('../views/backend/notifications/Read')
const UnreadNotifications = () =>import('../views/backend/notifications/Unread')

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
  {
    path: 'track-orders',
    name: 'app.order-track',
    meta: {  name: 'order-track' },
    component: OrderTrack
  },
  {
    path: 'notifications/read',
    name: 'app.notifications-read',
    meta: {  name: 'notifications-read' },
    component: ReadNotifications
  },
  {
    path: 'notifications/unread',
    name: 'app.notifications-unread',
    meta: {  name: 'notifications-unread' },
    component: UnreadNotifications
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
    path: '/privacy-policy',
    name: '',
    component: BlankLayout,
    children: [
      {
        path: '',
        name: 'privacy.policy',
        meta: {  name: 'PrivacyPolicy' },
        component: PrivacyPolicy,
      },
    ]
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
    path: '/auth/verify/:verifyUrl',
    name: '',
    component: BlankLayout,
    children: [
      {
        path: '',
        name: 'auth.verify-email',
        meta: {  name: 'Verify Email' },
        component: VerifyEmail
      },
    ]
  },
  { path: '*', name: '404', component: Error404 }
]

export default routes;
