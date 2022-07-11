import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

/**
 * Authentication guard for routes
 * @param {PropTypes.node} children children element/node
 */

const UserGuard = ({ children }) => {
  const auth = useSelector((state) => state.user);

  if (!auth) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default UserGuard;
