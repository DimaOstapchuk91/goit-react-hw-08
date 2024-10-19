import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import { useState } from 'react';
import EditContactModal from '../EditContactModal/EditContactModal';

import ReactModal from 'react-modal';
import toast from 'react-hot-toast';
import ModalDelete from '../ModalDelete/ModalDelete';

const Contact = ({ user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalDellOpen, setIsModalDellOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDeleteContactUser = () => {
    dispatch(deleteContact(user.id));
    toast.success('Successfully Deleted', {
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
  };

  const handleOpenModal = openModal => {
    openModal(true);
  };
  const handleCloseModal = closeModal => {
    closeModal(false);
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
          onClick={() => handleOpenModal(setIsModalDellOpen)}
        >
          <RiDeleteBinLine size={24} />
        </button>
        <button
          onClick={() => handleOpenModal(setIsModalOpen)}
          className='bg-blue opacity-80 text-light-blue p-1 rounded-md transition-all duration-300 hover:bg-hover-blue'
        >
          <RiEdit2Line size={24} />
        </button>
        <ReactModal
          isOpen={isModalOpen}
          contentLabel={'Example Modal'}
          className='fixed inset-0 flex items-center justify-center'
        >
          <EditContactModal
            closeModal={() => handleCloseModal(setIsModalOpen)}
            user={user}
          />
        </ReactModal>
        <ReactModal
          isOpen={isModalDellOpen}
          contentLabel={'text'}
          className='fixed inset-0 flex items-center justify-center'
        >
          <ModalDelete
            closeModal={() => handleCloseModal(setIsModalDellOpen)}
            deleteContact={handleDeleteContactUser}
          />
        </ReactModal>
      </div>
    </>
  );
};
export default Contact;
