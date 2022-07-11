import { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDOM from 'react-dom';

function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onHideCartHandler}></div>;
}

function ModalOverlay(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}

const portalElement = document.getElementById('overlays');

function Modal(props) {
  return (
    <Fragment>
    {ReactDOM.createPortal(<Backdrop onHideCartHandler={props.onHideCartHandler}/>, portalElement)}
    {ReactDOM.createPortal(
      <ModalOverlay>{props.children}</ModalOverlay>,
      portalElement
    )}
  </Fragment>
  );
}

export default Modal;
