import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { MdDone } from 'react-icons/md';
import { IconContext } from 'react-icons';
import s from './ContactsForm.module.css';
import { addContact } from '../../redux/actions';
import { getContacts } from '../../redux/selectors';
import { initialContactData } from '../../initial/contactsData';
import notification from '../../services/notification';
import InputName from '../InputFields/InputName.jsx';
import InputNumber from '../InputFields/InputNumber.jsx';
import ButtonSecondary from '../ButtonSecondary';
import InputEmail from '../InputFields/InputEmail.jsx';
import InputSkype from '../InputFields/InputSkype.jsx';
import InputTelegram from '../InputFields/InputTelegram.jsx';
import SelectGroup from '../SelectGroup';
import IconButton from '../IconButton';
import { iconButtonPrimary } from '../../styles/iconButton-inline-styles';

const ContactsForm = () => {
  const contactsList = useSelector(getContacts);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    errors,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm({
    criteriaMode: 'all',
  });

  const [additionalInfo, setAdditionalInfo] = useState(false);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ ...initialContactData });
      setAdditionalInfo(false);
    }
  }, [isSubmitSuccessful, reset]);

  const onFormSubmit = data => {
    const {
      name,
      number,
      email = initialContactData.email,
      skype = initialContactData.skype,
      telegram = initialContactData.telegram,
      group = initialContactData.group,
    } = data;
    const includesContact = contactsList.some(contact => contact.name === name);
    !includesContact
      ? dispatch(addContact(name, number, email, skype, telegram, group))
      : notification(`${name} is already in your contacts`);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onFormSubmit)}>
      <ul className={s.formList}>
        <li>
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
          </ul>
        </li>
        {!additionalInfo ? (
          <li className={s.buttonItem}>
            <ButtonSecondary
              onClick={() => setAdditionalInfo(true)}
              children={'add info'}
            />
          </li>
        ) : (
          <>
            <li>
              <ul>
                <InputEmail
                  key="email"
                  name="email"
                  register={register}
                  errors={errors}
                />
                <InputSkype key="skype" name="skype" register={register} />
                <InputTelegram
                  key="telegram"
                  name="telegram"
                  register={register}
                />
                <SelectGroup key="group" name="group" register={register} />
              </ul>
            </li>
            <li className={s.buttonItem}>
              <ButtonSecondary
                onClick={() => setAdditionalInfo(false)}
                children={'hide'}
              />
            </li>
          </>
        )}
      </ul>
      <IconButton
        type="submit"
        aria-label="Кнопка 'Добавить контакт'"
        style={iconButtonPrimary}
      >
        <IconContext.Provider value={{ className: `${s.reactIcons}` }}>
          <MdDone />
        </IconContext.Provider>
      </IconButton>
    </form>
  );
};

export default ContactsForm;
