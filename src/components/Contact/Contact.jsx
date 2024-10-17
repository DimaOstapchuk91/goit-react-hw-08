import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';

const Contact = ({ user }) => {
  const dispatch = useDispatch();

  const handleDeleteContactUser = () => {
    dispatch(deleteContact(user.id));
  };

  return (
    <>
      <div>
        <p className='font-bold'>
          Name: {user.name.charAt(0).toUpperCase() + user.name.slice(1)}
        </p>
        <p className='font-bold'>Phone: {user.number}</p>
      </div>
      <div className='flex flex-col gap-1'>
        <button
          className='bg-red opacity-70 text-light-blue p-1 rounded-md transition-all duration-300 hover:opacity-80'
          type='button'
          onClick={handleDeleteContactUser}
        >
          <RiDeleteBinLine size={24} />
        </button>
        <button className='bg-blue opacity-80 text-light-blue p-1 rounded-md transition-all duration-300 hover:bg-hover-blue'>
          <RiEdit2Line size={24} />
        </button>
      </div>
    </>
  );
};
export default Contact;
