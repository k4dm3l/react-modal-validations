import style from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={style.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Button;
