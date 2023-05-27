import { Fragment } from "react";
import { createPortal } from "react-dom";
import Card from "./Card";
import Button from "./Button";

import style from "../UI/Modal.module.css";

const Backdrop = (props) => {
  return <div className={style.backdrop} onClick={props.onClick}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Card className={style.modal}>
      <header className={style.header}>
        <h2>{props.config.title || "no title"}</h2>
      </header>
      <div className={style.content}>
        <p>{props.config.message || "no message"}</p>
      </div>
      <footer className={style.actions}>
        <Button
          text={props.config.buttonText || "no text"}
          onClick={props.onClick}
        />
      </footer>
    </Card>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {createPortal(
        <Backdrop onClick={props.onCloseError} />,
        document.getElementById("backdrop-root")
      )}
      {
        createPortal(
          <ModalOverlay config={{
            title: props.config.title,
            message: props.config.message,
            buttonText: props.config.buttonText
          }} onClick={props.onCloseError}/>,
          document.getElementById("overlay-root")
        )
      }
    </Fragment>
  );
};

export default Modal;
