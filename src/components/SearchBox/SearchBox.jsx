// import { useDispatch } from 'react-redux';
import s from './SearchBox.module.css';
// import { changeFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  //   const dispatch = useDispatch();

  const handleSearchUser = event => {
    const form = event.target;

    // dispatch(changeFilter(form.value.toLowerCase()));
  };
  return (
    <div className='p-7 w-[360px] bg-light-blue rounded-xl shadow-custom-blue'>
      <label className='flex flex-col text-lg font-bold gap-2'>
        Find contact by name
        <input
          className='py-2 px-5 h-8 rounded-md border-brand-blue border-2 outline-none focus:border-blue'
          type='text'
          onChange={handleSearchUser}
        />
      </label>
    </div>
  );
};
export default SearchBox;
