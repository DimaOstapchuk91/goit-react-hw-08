import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logaut } from '../../redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUser);
  return (
    <div className='flex gap-4 items-center'>
      <h2 className='text-light-blue font-bold text-2xl'>
        Hello! {userName.name}
      </h2>
      <button
        onClick={() => dispatch(logaut())}
        className='py-2 px-5 bg-brand-blue rounded-md text-light-blue font-bold transition-all duration-300 hover:bg-hover-blue'
      >
        Exit
      </button>
    </div>
  );
};
export default UserMenu;
