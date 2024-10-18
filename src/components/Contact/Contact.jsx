import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import { useState } from 'react';
import EditContactModal from '../EditContactModal/EditContactModal';

import ReactModal from 'react-modal';

const Contact = ({ user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDeleteContactUser = () => {
    dispatch(deleteContact(user.id));
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  ReactModal.setAppElement('#root');

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
        <button
          onClick={handleOpenModal}
          className='bg-blue opacity-80 text-light-blue p-1 rounded-md transition-all duration-300 hover:bg-hover-blue'
        >
          <RiEdit2Line size={24} />
        </button>
        <ReactModal
          isOpen={isModalOpen}
          contentLabel={'Example Modal'}
          className='fixed inset-0 flex items-center justify-center'
        >
          <EditContactModal closeModal={handleCloseModal} user={user} />
        </ReactModal>
      </div>
    </>
  );
};
export default Contact;
