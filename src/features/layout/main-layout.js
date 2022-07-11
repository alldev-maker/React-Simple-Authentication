import Header from 'components/header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <main className="vw-100 vh-100">
      <Header />
      <Outlet />
    </main>
  );
};

export default MainLayout;
