import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <main className="vw-100 vh-100 d-flex align-items-center justify-content-center">
      <Outlet />
    </main>
  );
};

export default AuthLayout;
