import { deleteContact } from 'redux/contactSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, } from 'redux/contactSlice';
import { getFilter,  } from 'redux/filterSlice';

export const ContactList = () => {

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);


   const onDelete = id => {
    dispatch(deleteContact(id));
  };


    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );



  return (
    <ul>
      {filteredContacts.map(contact => {
        return (
          <li key={contact.id}>
            <p>
              {contact.name}: <span>{contact.number}</span>
            </p>
            <button type="button" onClick={() => onDelete(contact.id)}>
             Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};