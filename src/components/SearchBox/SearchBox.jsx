import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleSearchUser = event => {
    const form = event.target;
    dispatch(changeFilter(form.value.toLowerCase()));
  };
  return (
    <div className='p-7 w-[360px] bg-light-blue rounded-xl shadow-custom-blue'>
      <h2 className='text-center font-bold text-lg mb-6'>Search User</h2>
      <label className='flex flex-col text-lg font-bold gap-2'>
        Find contact by name/number
        <input
          className='py-2 px-5 h-8 rounded-md border-brand-blue border-2 outline-none text-base font-medium focus:border-hover-blue'
          placeholder='Enter Name/Number'
          type='text'
          onChange={handleSearchUser}
        />
      </label>
    </div>
  );
};
export default SearchBox;
