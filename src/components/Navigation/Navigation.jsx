import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const Navigation = () => {
  const loggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <nav className=''>
        <NavLink
          className={({ isActive }) =>
            `mr-4 font-semibold text-xl text-light-blue transition-all duration-300 hover:text-hover-gray ${
              isActive ? 'text-hover-blue underline' : ''
            }`
          }
          to='/'
        >
          Home
        </NavLink>
        {loggedIn && (
          <NavLink
            className={({ isActive }) =>
              `mr-4 font-semibold text-xl text-light-blue transition-all duration-300 hover:text-hover-gray ${
                isActive ? 'underline text-hover-blue' : ''
              }`
            }
            to='/contacts'
          >
            Contacts
          </NavLink>
        )}
      </nav>
    </div>
  );
};
export default Navigation;
