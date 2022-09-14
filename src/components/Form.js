import React from 'react';
import '../styles/components/Form.scss';
import ConfirmButton from '../components/ConfirmButton';

function Form() {
  return (
    <section className="form">
      <form action="" method="post" className="form__sectionForm">
        <label className="form__label" htmlFor="name">
          cardholder name
        </label>
        <input
          className="form__input"
          type="text"
          name="name"
          id="name"
          placeholder="Jane Appleseed"
        />
        <label className="form__label" htmlFor="card number">
          card number
        </label>
        <input
          className="form__input"
          type="text"
          name="card number"
          id="card number"
          placeholder="1234 5678 9123 0000"
        />
        <div className="form__containerDateAndCvc">
          <div className="form__input--containerDate">
            <label className="form__label" htmlFor="exp. date">
              Exp. Date (MM/YY)
            </label>
            <div className="form__date">
              <input
                className="form__input form__input--date"
                type="text"
                name="exp. date"
                id="exp. date"
                placeholder="MM"
              />
              <input
                className="form__input form__input--date"
                type="text"
                name="exp. date"
                id="exp. date"
                placeholder="YY"
              />
            </div>
          </div>
          <div className="form__containerCvc">
            {' '}
            <label className="form__label" htmlFor="cvc">
              CVC
            </label>
            <input
              className="form__input form__input--cvc"
              type="text"
              name="cvc"
              id="cvc"
              placeholder="123"
            />
          </div>
        </div>

        <ConfirmButton />
      </form>
    </section>
  );
}

export default Form;
