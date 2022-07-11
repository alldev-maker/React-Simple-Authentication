import AuthLayout from 'features/layout/auth-layout';
import GuestGuard from './guards/guest-guard';
import { Login } from 'pages';

const AuthRoutes = {
  path: '/',
  element: (
    <GuestGuard>
      <AuthLayout />
    </GuestGuard>
  ),
  children: [
    {
      path: '/login',
      element: <Login />,
    },
  ],
};

export default AuthRoutes;
