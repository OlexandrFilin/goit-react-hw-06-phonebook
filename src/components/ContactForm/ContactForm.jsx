import React from 'react';
import { FormUser, LabelForm, InputUser } from './ContactForm.styled';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'components/redux/contactSlice';

export const ContactForm = ({ onSubmitForm }) => {
  const [isName, setName] = useState('');
  const [isNumber, setNumber] = useState('');
  //const state =useSelector(state=>state.contactsUser.contactsUser)


  const dispatch = useDispatch();

  const onChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      setName(value);
    } else {
      setNumber(value);
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };
  const submitForm = evt => {
    evt.preventDefault();
     dispatch(addContact( 
      {
      id: nanoid(),
      name: isName,
      number: isNumber,
    }
    ));
   //console.log('dispatch', addCont)
    //);
    resetForm();
  };
  return (
    <FormUser onSubmit={submitForm}>
      <LabelForm>
        Name
        <InputUser
          type="text"
          value={isName}
          name="name"
          placeholder="Name"
          onChange={onChange}
          required
          pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
      </LabelForm>
      <LabelForm>
        Number
        <InputUser
          type="tel"
          name="number"
          value={isNumber}
          onChange={onChange}
          placeholder="Phone number"
          required
        />
      </LabelForm>
      <button type="submit">Add contact</button>
    </FormUser>
  );
};
