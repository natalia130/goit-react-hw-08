import css from './ContactList.module.css';
import Contact from '../Contact/Contact.jsx';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors.js';

const ContactList = () => {
    const filteredContacts = useSelector(selectFilteredContacts);

    return (
        <div>
            <ul className={css.contacts}>
                { filteredContacts.map((contact) => {
                    return (
                        <li key={contact.id}>
                            <Contact
                                id={contact.id}
                                name={contact.name}
                                number={contact.number}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ContactList;