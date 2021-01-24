import { IoLogoSkype } from 'react-icons/io';
import { IconContext } from 'react-icons';
import s from './Input.module.css';

const InputSkype = ({ name, register }) => {
  return (
    <li className={s.item}>
      <IconContext.Provider value={{ className: `${s.reactIcons}` }}>
        <IoLogoSkype />
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

export default InputSkype;
