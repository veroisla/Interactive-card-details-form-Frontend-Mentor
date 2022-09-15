import React from 'react';
import '../styles/components/CompleteState.scss';
import iconComplete from '../images/icon-complete.svg';
import CardPreview from './CardPreview';
import Button from '../components/Button';

function CompleteState() {
  return (
    <>
      <CardPreview />
      <section className="complete">
        <img src={iconComplete} alt="Icon Complete Card" />
        <h2>thank you</h2>
        <p>We´ve added your card details</p>
        <Button buttonText={'Continue'} />
      </section>
    </>
  );
}

export default CompleteState;
