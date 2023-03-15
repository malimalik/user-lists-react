import React, { useState, Fragment } from "react";
import ReactDOM from "react-dom";

import BackDrop from "./BackDrop";
import ModalOverlay from "./ModalOverlay";

const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop")
      )}

      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        ></ModalOverlay>,
        document.getElementById("modal-overlay")
      )}
    </Fragment>
  );
};

export default ErrorModal;
