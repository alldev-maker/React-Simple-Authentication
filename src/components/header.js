import { useSelector } from 'react-redux';

const Header = () => {
  const auth = useSelector((state) => state.user);

  return (
    <header>
      <h1 className="text-center py-5">{auth?.username}</h1>
    </header>
  );
};

export default Header;
