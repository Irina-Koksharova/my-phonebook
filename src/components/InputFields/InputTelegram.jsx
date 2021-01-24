import { FaTelegramPlane } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import s from './Input.module.css';

const InputTelegram = ({ name, register }) => {
  return (
    <li className={s.item}>
      <IconContext.Provider value={{ className: `${s.reactIcons}` }}>
        <FaTelegramPlane />
      </IconContext.Provider>

      <input
        className={s.input}
        id={name}
        name={name}
        placeholder={name}
        autoComplete="off"
        ref={register}
      ></input>
    </li>
  );
};

export default InputTelegram;
