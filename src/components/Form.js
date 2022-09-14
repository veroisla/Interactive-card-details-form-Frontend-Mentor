import React from 'react';
import '../styles/components/Form.scss';
import ConfirmButton from '../components/ConfirmButton';

function Form() {
  return (
    <section>
      <form action="" method="post" className="form__sectionForm">
        <label htmlFor="name">cardholder name</label>
        <input type="text" name="name" id="name" placeholder="Jane Appleseed" />
        <label htmlFor="card number">card number</label>
        <input
          type="text"
          name="card number"
          id="card number"
          placeholder="1234 5678 9123 0000"
        />
        <label htmlFor="exp. date">Exp. Date (MM/YY)</label>
        <input type="text" name="exp. date" id="exp. date" placeholder="MM" />
        <input type="text" name="exp. date" id="exp. date" placeholder="YY" />
        <label htmlFor="cvc">CVC</label>
        <input type="text" name="cvc" id="cvc" placeholder="123" />
        <ConfirmButton />
      </form>
    </section>
  );
}

export default Form;
