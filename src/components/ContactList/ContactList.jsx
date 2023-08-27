import { deleteContact } from 'redux/contactSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, } from 'redux/contactSlice';

export const ContactList = () => {

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

   const onDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {contacts.map(contact => {
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