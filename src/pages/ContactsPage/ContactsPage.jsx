import { useDispatch } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import { fetchContacts } from '../../redux/contacts/operations';

const ContactsPage = () => {
  const dispatch = useDispatch();

  dispatch(fetchContacts());

  return (
    <div className='flex w-[1000px] m-auto bg-blue p-8 rounded-xl gap-8'>
      <div className='flex flex-col'>
        <ContactForm />
        <SearchBox />
      </div>
      <ContactList />
    </div>
  );
};
export default ContactsPage;
