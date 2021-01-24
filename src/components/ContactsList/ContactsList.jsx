import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { MdDone } from 'react-icons/md';
import { IconContext } from 'react-icons';
import s from './ContactsList.module.css';
import {
  deleteContact,
  changeFilter,
  changeContact,
} from '../../redux/actions';
import { getVisibleContacts } from '../../redux/selectors';
import ContactItem from '../ContactItem/ContactItem';
import Container from '../Container';
import { popUpContainer, isShown } from '../../styles/container-inline-styles';
import Title from '../Title';
import { titleMain } from '../../styles/title-inline-styles';
import InputName from '../InputFields/InputName.jsx';
import InputNumber from '../InputFields/InputNumber.jsx';
import InputEmail from '../InputFields/InputEmail.jsx';
import InputSkype from '../InputFields/InputSkype.jsx';
import InputTelegram from '../InputFields/InputTelegram.jsx';
import SelectGroup from '../SelectGroup';
import IconButton from '../IconButton';
import { iconButtonPrimary } from '../../styles/iconButton-inline-styles';

const ContactsList = () => {
  const [selectedContact, setSelectedContact] = useState(null);
  const [currentStyle, setCurrentStyle] = useState(popUpContainer);
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    errors,
    setValue,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm({
    criteriaMode: 'all',
  });

  useEffect(() => {
    const setInputValues = contact => {
      return Object.entries(contact)
        .slice(1, 7)
        .forEach(property => setValue(property[0], property[1]));
    };
    if (selectedContact) {
      setInputValues(selectedContact);
    }
  }, [selectedContact, setValue]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      setCurrentStyle(popUpContainer);
    }
  }, [isSubmitSuccessful, reset]);

  const onDelete = id => {
    dispatch(deleteContact(id));
    dispatch(changeFilter(''));
  };

  const onChange = id => {
    setSelectedContact(contacts.find(contact => contact.id === id));
    setCurrentStyle({ ...popUpContainer, ...isShown });
  };

  const onFormSubmit = data => {
    const { name, number, email, skype, telegram, group } = data;
    const { id } = selectedContact;
    dispatch(changeContact(id, name, number, email, skype, telegram, group));
  };

  return (
    <>
      <ul className={s.list}>
        {contacts.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onChange={onChange}
            onDelete={onDelete}
          />
        ))}
      </ul>
      <Container style={currentStyle}>
        <Title children={'Contact details'} style={titleMain} />
        <form className={s.form} onSubmit={handleSubmit(onFormSubmit)}>
          <ul>
            <InputName
              key="name"
              name="name"
              register={register}
              errors={errors}
            />
            <InputNumber
              key="number"
              name="number"
              register={register}
              errors={errors}
            />
            <InputEmail
              key="email"
              name="email"
              register={register}
              errors={errors}
            />
            <InputSkype key="skype" name="skype" register={register} />
            <InputTelegram key="telegram" name="telegram" register={register} />
            <SelectGroup key="group" name="group" register={register} />
          </ul>
          <IconButton
            type="submit"
            aria-label="Кнопка 'Добавить контакт'"
            style={{
              ...iconButtonPrimary,
              marginTop: '50px',
              alignSelf: 'center',
            }}
          >
            <IconContext.Provider value={{ className: `${s.reactIcons}` }}>
              <MdDone />
            </IconContext.Provider>
          </IconButton>
        </form>
      </Container>
    </>
  );
};

export default ContactsList;
