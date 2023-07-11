import { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

// The Backdrop and ModalOverlay components are only created for
// styling purposes

function Backdrop(props) {
  return <div className={classes.backdrop}></div>;
}

function ModalOverlay(props) {
  return (
    <div className={classes.modal}>
      <div>{props.children}</div>
    </div>
  );
}

// here we use protal so that we have a nice structure when we inspect the app
// this is not mandatory and you can render Backdrop and ModalOverlay as normal
const portalElement = document.getElementById("overlays");

export default function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}
