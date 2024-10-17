import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import {
  selectFilteredContacts,
  selectIsLoading,
} from '../../redux/contacts/selectors';

const ContactList = () => {
  const searchUsers = useSelector(selectFilteredContacts);
  const loader = useSelector(selectIsLoading);

  return (
    <div className='w-full'>
      {loader && <Loader />}
      <ul className='flex flex-col gap-6 '>
        {searchUsers.map(user => (
          <li
            className='flex justify-between items-center p-4 w-full h-20 bg-light-blue rounded-xl shadow-custom-blue'
            key={user.id}
          >
            <Contact user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ContactList;
