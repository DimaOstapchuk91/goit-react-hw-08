import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logaut } from '../../redux/auth/operations';
import toast from 'react-hot-toast';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUser);

  const handleExit = () => {
    toast.success(`Goodbye ${userName.name}`, {
      duration: 4000,
      position: 'top-center',

      style: {
        borderRadius: '10px',
        background: 'rgb(8, 168, 241)',
        color: 'aliceblue',
      },

      className: '',
      icon: '👋',
    });
    dispatch(logaut());
  };

  setTimeout(() => {
    toast.success(`Hello ${userName.name}`, {
      duration: 4000,
      position: 'top-center',

      style: {
        borderRadius: '10px',
        background: 'rgb(8, 168, 241)',
        color: 'aliceblue',
      },

      className: '',
      icon: '👋',
    });
  }, 1000);
  return (
    <div className='flex gap-4 items-center'>
      <h2 className='text-light-blue font-bold text-2xl'>
        Hello! {userName.name}
      </h2>
      <button
        onClick={handleExit}
        className='py-2 px-5 bg-brand-blue rounded-md text-light-blue font-bold transition-all duration-300 hover:bg-hover-blue'
      >
        Exit
      </button>
    </div>
  );
};
export default UserMenu;
