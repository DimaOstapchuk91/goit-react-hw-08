import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div>
      <NavLink
        className={({ isActive }) =>
          `mr-4 font-semibold text-xl text-light-blue transition-all duration-300 hover:text-hover-gray ${
            isActive ? 'text-hover-blue underline' : ''
          }`
        }
        to='/register'
      >
        Registration
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `mr-4 font-semibold text-xl text-light-blue transition-all duration-300 hover:text-hover-gray ${
            isActive ? 'text-hover-blue underline' : ''
          }`
        }
        to='/login'
      >
        Login
      </NavLink>
    </div>
  );
};
export default AuthNav;
