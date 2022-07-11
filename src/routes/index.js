import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './main-routes';
import AuthRoutes from './auth-routes';

export default function Routes() {
  return useRoutes([MainRoutes, AuthRoutes]);
}
