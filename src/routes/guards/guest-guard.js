import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// ==============================|| GUEST GUARD ||============================== //

/**
 * Guest guard for routes having no auth required
 * @param {PropTypes.node} children children element/node
 */

const GuestGuard = ({ children }) => {
  const auth = useSelector((state) => state.user);

  if (auth?.user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default GuestGuard;
