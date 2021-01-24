import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getContacts } from '../../redux/selectors';
import {
  mainContainer,
  subContainer,
} from '../../styles/container-inline-styles';
import Container from '../Container';
import Title from '../Title';
import { titleMain } from '../../styles/title-inline-styles';
import ContactsForm from '../ContactsForm';
import Filter from '../Filter';
import ContactsList from '../ContactsList';

const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Container style={mainContainer}>
      <Container style={subContainer}>
        <Title children={'Phonebook'} style={titleMain} />
        <ContactsForm />
        <ToastContainer autoClose={3000} limit={1} style={{ width: '352px' }} />
      </Container>

      {contacts.length > 0 && (
        <Container style={subContainer}>
          <Title children={'Contacts'} style={titleMain} />
          <Filter />
          <ContactsList />
        </Container>
      )}
    </Container>
  );
};

export default App;
