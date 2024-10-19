const ModalDelete = ({ closeModal, deleteContact }) => {
  const handleDell = () => {
    deleteContact();
    closeModal();
  };

  return (
    <div className='flex flex-col bg-blue w-[400px] rounded-xl p-6'>
      <button
        type='button'
        className='p-1 w-8 self-end rounded-full mb-2 bg-blue font-bold text-light-blue hover:bg-hover-blue'
        onClick={closeModal}
      >
        X
      </button>
      <div className='bg-light-blue rounded-lg p-4'>
        <p className='font-bold text-center mb-6'>
          Are you sure you want to delete?
        </p>
        <div className='flex justify-around'>
          <button
            className='bg-red opacity-70 py-1 px-4 text-light-blue rounded-md font-bold transition-all duration-300 hover:opacity-90'
            onClick={handleDell}
          >
            Sure
          </button>
          <button
            className='bg-blue py-1 px-4 text-light-blue rounded-md font-bold transition-all duration-300 hover:bg-hover-blue'
            onClick={() => closeModal()}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};
export default ModalDelete;
