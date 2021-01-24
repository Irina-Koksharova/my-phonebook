import { MdEmail } from 'react-icons/md';
import { IconContext } from 'react-icons';
import s from './Input.module.css';

const InputEmail = ({ name, register, errors }) => {
  return (
    <li className={s.item}>
      <IconContext.Provider value={{ className: `${s.reactIcons}` }}>
        <MdEmail />
      </IconContext.Provider>

      <input
        className={s.input}
        id={name}
        name={name}
        placeholder={name}
        autoComplete="off"
        ref={register({
          pattern: {
            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
          },
        })}
      ></input>
      {errors.email && <p className={s.errorMessage}>Email is not valid</p>}
    </li>
  );
};

export default InputEmail;
