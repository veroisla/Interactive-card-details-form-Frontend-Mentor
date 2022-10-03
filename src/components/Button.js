import React from 'react';
import '../styles/components/Button.scss';

function ConfirmButton(props) {
  return (
    <>
      <input
        type="submit"
        value={props.buttonText}
        className="confirmButton"
        // onClick={props.handleForm}
      />
    </>
  );
}

export default ConfirmButton;
