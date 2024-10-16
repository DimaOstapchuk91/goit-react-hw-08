import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';

const ContactsPage = () => {
  return (
    <div className='flex flex-col items-start w-[1000px] m-auto'>
      <ContactForm />
      <SearchBox />
    </div>
  );
};
export default ContactsPage;
