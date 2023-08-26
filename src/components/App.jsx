import { useState, useEffect } from 'react';
// import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { GlobalStyle } from './GlobalStyle';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   onChangeInput = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//   };

//   filter = () => {
//     const { contacts, filter } = this.state;
//     const filteredContacts = contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//     return filteredContacts;
//   };

//   addContact = newContact => {
//     if (
//       this.state.contacts.some(
//         contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
//       )
//     ) {
//       alert(`${newContact.name} is already in contacts`);
//     } else {
//       this.setState(prevState => ({
//         contacts: [...prevState.contacts, newContact],
//       }));
//     }
//   };

//   deleteContact = id => {
//     const { contacts } = this.state;
//     const deletedContactById = contacts.filter(contact => contact.id !== id);
//     this.setState({ contacts: deletedContactById });
//   };

//   render() {
//     return (
//       <div>
//         <GlobalStyle />
//         <h1>Phonebook</h1>
//         <ContactForm onAdd={this.addContact} />
//         <h2>Contacts</h2>
//         <Filter filter={this.state.filter} onChangeInput={this.onChangeInput} />
//         <ContactList contacts={this.filter()} onDelete={this.deleteContact} />
//       </div>
//     );
//   }
// }

export const App = () => {
  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(window.localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
  );

  const [filter, setFilter] = useState('');

  const onChangeInput = e => {
    setFilter(e.currentTarget.value);
  };
  const filterNew = () => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  };

  const addContact = newContact => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      setContacts(prevState => [...prevState, newContact]);
    }
  };

  const deleteContact = id => {
    const deletedContactById = contacts.filter(contact => contact.id !== id);
    setContacts(deletedContactById);
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <GlobalStyle />
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChangeInput={onChangeInput} />
      <ContactList contacts={filterNew()} onDelete={deleteContact} />
    </div>
  );
};