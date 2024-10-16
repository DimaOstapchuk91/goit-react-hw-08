import { ErrorMessage, Field, Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { login } from '../../redux/auth/operations';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleLogin = (value, options) => {
    dispatch(login(value));
    console.log(value);
    options.resetForm();
  };

  const orderSchema = Yup.object({
    email: Yup.string()
      .min(3, 'Minimum 3 characters')
      .max(50, 'Maximum 50 characters')
      .required('Must be filled'),
    password: Yup.string()
      .min(3, 'Minimum 3 characters')
      .max(50, 'Maximum 50 characters')
      .required('Must be filled'),
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
            Login
            <Field
              className='py-2 px-5 w-full h-8 rounded-md border-brand-blue border-2 outline-none focus:border-blue'
              name='email'
              placeholder='Enter the Login'
            />
            <ErrorMessage name='email' component='p' />
          </label>
          <label className='flex flex-col text-white font-semibold'>
            Password
            <Field
              className='py-2 px-5 h-8 rounded-md border-brand-blue border-2 outline-none focus:border-blue w-full'
              name='password'
              placeholder='Enter the password'
            />
            <ErrorMessage name='password' component='p' />
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
