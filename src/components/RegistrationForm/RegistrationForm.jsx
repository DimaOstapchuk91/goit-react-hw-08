import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { register } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const orderSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Minimum 3 characters')
      .max(50, 'Maximum 50 characters')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email format')
      .min(3, 'Minimum 3 characters')
      .max(50, 'Maximum 50 characters')
      .required('Email is required'),
    password: Yup.string()
      .min(3, 'Minimum 3 characters')
      .max(50, 'Maximum 50 characters')
      .required('Password is required'),
  });

  const handleRegister = (value, options) => {
    dispatch(register(value));
    console.log(value);
    options.resetForm();
  };

  return (
    <div>
      <h2 className='text-center text-light-blue font-bold text-4xl mb-8'>
        Registration
      </h2>
      <div className='flex gap-8'>
        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          validationSchema={orderSchema}
          onSubmit={handleRegister}
        >
          <Form className='flex flex-col min-w-[400px] items-center gap-4 bg-light-blue  p-8 rounded-xl'>
            <label className='flex flex-col font-semibold'>
              <div className='flex justify-between'>
                <p>Name</p>
                <ErrorMessage className='text-red' name='name' component='p' />
              </div>
              <Field
                className='py-2 px-5 w-full h-8 rounded-md border-brand-blue border-2 outline-none focus:border-hover-blue'
                name='name'
                placeholder='Enter Name'
              />
            </label>
            <label className='flex flex-col font-semibold'>
              <div className='flex justify-between'>
                <p>Email</p>
                <ErrorMessage className='text-red' name='email' component='p' />
              </div>
              <Field
                className='py-2 px-5 w-full h-8 rounded-md border-brand-blue border-2 outline-none focus:border-hover-blue'
                name='email'
                placeholder='email'
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
                className='py-2 px-5 w-full h-8 rounded-md border-brand-blue border-2 outline-none focus:border-hover-blue'
                name='password'
                placeholder='Enter the password'
              />
            </label>
            <button
              className='py-2 px-5 m-auto font-bold bg-blue text-light-blue rounded-lg transition-all hover:bg-hover-blue'
              type='submit'
            >
              Register
            </button>
          </Form>
        </Formik>
        <div>
          <p className='text-light-blue font-semibold text-2xl'>
            Register to access your contacts.
            <br /> Your email will be used as your login in the future.
          </p>
        </div>
      </div>
    </div>
  );
};
export default RegistrationForm;
