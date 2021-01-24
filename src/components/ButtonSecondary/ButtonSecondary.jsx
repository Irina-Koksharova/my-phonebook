import s from './ButtonSecondary.module.css';

const ButtonSecondary = ({ onClick, children }) => {
  return (
    <button className={s.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonSecondary;
