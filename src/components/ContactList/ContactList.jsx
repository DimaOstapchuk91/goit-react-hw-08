import s from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import {
  selectFilteredContacts,
  selectIsLoading,
} from '../../redux/contactsSlice';
import Loader from '../Loader/Loader';

const ContactList = () => {
  const searchUsers = useSelector(selectFilteredContacts);
  const loader = useSelector(selectIsLoading);

  return (
    <div>
      {loader && <Loader />}
      <ul className={s.contactList}>
        {searchUsers.map(user => (
          <li className={s.contactItem} key={user.id}>
            <Contact user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ContactList;
