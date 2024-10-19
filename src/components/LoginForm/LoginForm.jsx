import { ErrorMessage, Field, Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { login } from '../../redux/auth/operations';
import toast from 'react-hot-toast';
import { selectIsError } from '../../redux/auth/selectors';

const LoginForm = () => {
  const dispatch = useDispatch();
  const errorLogin = useSelector(selectIsError);

  const handleLogin = value => {
    dispatch(login(value));

    if (errorLogin) {
      toast.error('User Not Found!', {
        duration: 4000,
        position: 'top-center',

        style: {
          borderRadius: '10px',
          background: 'red',
          color: 'aliceblue',
        },
        icon: '🚩 ',
      });
    }
  };

  const orderSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .min(3, 'Minimum 3 characters')
      .max(50, 'Maximum 50 characters')
      .required('Must be filled'),
    password: Yup.string()
      .min(3, 'Minimum 3 characters')
      .max(50, 'Maximum 50 characters')
      .required('Email is required'),
  });

  return (
    <div>
      <h2 className='text-center text-light-blue font-bold text-4xl mb-8'>
        Login
      </h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={orderSchema}
        onSubmit={handleLogin}
      >
        <Form className='flex flex-col items-center gap-4 bg-light-blue  p-8 rounded-xl'>
          <label className='flex flex-col font-semibold'>
            <div className='flex justify-between'>
              <p>Login</p>
              <ErrorMessage className='text-red' name='email' component='p' />
            </div>
            <Field
              className='py-2 px-5 w-full h-8 rounded-md border-brand-blue border-2 outline-none focus:border-blue'
              name='email'
              placeholder='Enter the Login'
            />
          </label>
          <label className='flex flex-col text-white font-semibold'>
            <div className='flex justify-between'>
              <p>Password</p>
              <ErrorMessage
                className='text-red'
                name='password'
                component='p'
              />
            </div>
            <Field
              className='py-2 px-5 h-8 rounded-md border-brand-blue border-2 outline-none focus:border-blue w-full'
              name='password'
              placeholder='Enter the password'
            />
          </label>
          <button
            className='py-2 px-5 m-auto font-bold bg-blue text-light-blue rounded-lg transition-all hover:bg-hover-blue'
            type='submit'
          >
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default LoginForm;
