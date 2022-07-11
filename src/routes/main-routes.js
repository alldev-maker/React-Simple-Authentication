import UserGuard from './guards/user-guard';
import { Dashboard } from 'pages';
import MainLayout from 'features/layout/main-layout';

const MainRoutes = {
  path: '/',
  element: (
    <UserGuard>
      <MainLayout />
    </UserGuard>
  ),
  children: [
    {
      path: '/',
      element: <Dashboard />,
    },
  ],
};

export default MainRoutes;
