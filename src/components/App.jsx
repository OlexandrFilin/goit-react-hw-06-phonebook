import { useDispatch} from 'react-redux';
import { ContactForm  } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import React from 'react';
import { setFilter } from './redux/filterSlice';
export const App = () => {

    const dispatch=useDispatch();
  const handelInputChangeFilter = e => {
  dispatch(setFilter(e.currentTarget.value));
  };
  
  return (
    <>
      <h1 style={{ marginLeft: '20px' }}>Phonebook</h1>
      <ContactForm />
 
      <h2 style={{ marginLeft: '20px' }}>Contacts</h2>
      <Filter
        style={{ marginLeft: '20px' }}
      handleFilter={handelInputChangeFilter}
        
      />
      <ContactList
       
      />
    </>
  );
};
