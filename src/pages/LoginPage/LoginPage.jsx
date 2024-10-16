import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useEffect } from 'react';

const LoginPage = () => {
  const login = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (login) {
      navigate('/');
    }
  }, [navigate, login]);

  return (
    <div className='p-8  w-[1000px] m-auto bg-blue rounded-xl'>
      <LoginForm />
    </div>
  );
};
export default LoginPage;
