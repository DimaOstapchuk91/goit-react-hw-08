import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import toast from 'react-hot-toast';

const ContactForm = () => {
  const dispatch = useDispatch();

  const orderSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Minimum 3 characters')
      .max(50, 'Maximum 50 characters')
      .required('Must be filled'),
    number: Yup.string()
      .matches(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number')
      .min(3, 'Minimum 3 digits')
      .max(50, 'Maximum 50 digits')
      .required('Must be filled'),
  });

  const handleForm = (values, options) => {
    dispatch(
      addContact({
        name: values.name.trim().toLowerCase(),
        number: values.number,
      })
    );

    toast.success('Successfully Add Contact', {
      duration: 4000,
      position: 'top-center',

      style: {
        borderRadius: '10px',
        background: 'rgb(8, 168, 241)',
        color: 'aliceblue',
      },

      className: '',
      icon: '✅ ',
    });

    options.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={handleForm}
        validationSchema={orderSchema}
      >
        <Form className='flex flex-col p-7 w-[360px] gap-4 rounded-xl shadow-custom-blue bg-light-blue mb-6'>
          <h2 className='text-center font-bold text-lg'>Add New Contact</h2>
          <label className='flex flex-col gap-2 font-bold'>
            <div className='flex justify-between'>
              <p>Name</p>
              <ErrorMessage className='text-red' name='name' component='p' />
            </div>
            <Field
              className='py-2 px-5 h-8 rounded-md border-brand-blue border-2 outline-none text-base font-medium focus:border-hover-blue'
              name='name'
              placeholder='Enter Contact Name'
            />
          </label>
          <label className='flex flex-col gap-2 font-bold'>
            <div className='flex justify-between'>
              <p>Number</p>
              <ErrorMessage className='text-red' name='number' component='p' />
            </div>
            <Field
              className='py-2 px-5 h-8 rounded-md border-brand-blue border-2 outline-none text-base font-medium focus:border-hover-blue'
              name='number'
              placeholder='Enter Contact Number'
            />
          </label>
          <button
            className='py-2 px-5 m-auto font-bold bg-blue text-light-blue rounded-lg transition-all hover:bg-hover-blue'
            type='submit'
          >
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
