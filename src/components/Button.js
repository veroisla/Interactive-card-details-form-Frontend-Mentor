import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Button.scss';

function ConfirmButton(props) {
  return (
    <Link to={'/completeCard'}>
      <input type="submit" value={props.buttonText} className="confirmButton" />
    </Link>
  );
}

export default ConfirmButton;
