import Card from "./Card";
import Button from "./Button";

import style from "../UI/Modal.module.css";

const Modal = (props) => {
  return (
    <div>
      <div className={style.backdrop} onClick={props.onCloseError}></div>
      <Card className={style.modal}>
        <header className={style.header}>
          <h2>{props.config.title || 'no title'}</h2>
        </header>
        <div className={style.content}>
          <p>{props.config.message || 'no message'}</p>
        </div>
        <footer className={style.actions}>
          <Button text={props.config.buttonText || 'no text'} onClick={props.onCloseError} />
        </footer>
      </Card>
    </div>
  );
};

export default Modal;
