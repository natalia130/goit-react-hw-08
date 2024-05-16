import DocumentTitle from "../../components/DocumentTitle";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectIsLoading } from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactList from "../../components/ContactList/ContactList.jsx";
import ContactForm from "../../components/ContactForm/ContactForm.jsx";


const ContactsPage = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    
    return (
        <div>
            <DocumentTitle>Contacts</DocumentTitle>
            <div>{isLoading && 'Request in progress...'}</div>
            <ContactForm></ContactForm>
            <ContactList/>
        </div>
    );
};

export default ContactsPage;