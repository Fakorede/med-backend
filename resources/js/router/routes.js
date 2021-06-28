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

const UserAdd = () =>import('../views/backend/user/UserAdd')
const UserList = () =>import('../views/backend/user/UserList')
const UpdatePassword = () =>import('../views/backend/user/UpdatePassword')

const ResponseList = () =>import('../views/backend/response/ResponseList')
const ResponseView = () =>import('../views/backend/response/ResponseView')

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
    path: 'user-list',
    name: 'app.user-list',
    meta: {  name: 'user-list' },
    component:UserList
  },
  {
    path: 'user-add',
    name: 'app.user-add',
    meta: {  name: 'user-add' },
    component:UserAdd
  },
  {
    path: 'update-password',
    name: 'app.user-password-update',
    meta: {  name: 'user-password-update' },
    component:UpdatePassword
  },
  {
    path: 'response-list',
    name: 'app.response-list',
    meta: {  name: 'response-list' },
    component:ResponseList
  },
  {
    path: 'response/:id/view',
    name: 'app.response-view',
    meta: {  name: 'response-view' },
    component:ResponseView
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
