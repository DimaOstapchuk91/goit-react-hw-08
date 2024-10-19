import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const HomePage = () => {
  const login = useSelector(selectIsLoggedIn);

  return (
    <div className='p-8  w-[1000px] m-auto bg-blue rounded-xl'>
      <h1 className='text-center text-light-blue text-3xl font-bold mb-10'>
        Welcome to Your Personal Phonebook!{' '}
      </h1>
      <p className='text-light-blue text-xl font-bold mb-10'>
        Manage your contacts with ease. Add, delete, and update contacts
        securely.
      </p>
      {login ? (
        <p className='text-light-blue text-xl font-bold'>
          You're all set to manage your contacts. Go to the{' '}
          <NavLink className='underline' to='/contacts'>
            Contacts
          </NavLink>{' '}
          page to view, add, update, or delete your contacts.
        </p>
      ) : (
        <p className='text-light-blue text-xl font-bold'>
          To get started, please{' '}
          <NavLink className='underline' to='/register'>
            Register
          </NavLink>{' '}
          or{' '}
          <NavLink className='underline' to='/login'>
            Login
          </NavLink>{' '}
          to access your phonebook.
        </p>
      )}
    </div>
  );
};
export default HomePage;
