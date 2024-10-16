import { useSelector } from 'react-redux';
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const AppBar = () => {
  const login = useSelector(selectIsLoggedIn);
  return (
    <div className='flex w-[1000px] rounded-xl m-auto mt-4 mb-4 py-6 px-12 justify-between bg-blue items-center'>
      <Navigation />
      {!login ? <AuthNav /> : <UserMenu />}
    </div>
  );
};
export default AppBar;
