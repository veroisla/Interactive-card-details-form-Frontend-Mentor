import React from 'react';
import '../styles/components/Form.scss';
import Button from '../components/Button';

function Form(props) {
  const handleSubmit = () => {
    props.handleSubmit();
  };
  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputChanged = ev.target.name;
    props.handleInput(inputValue, inputChanged);
  };

  return (
    <section className="form">
      <form
        action=""
        method="post"
        className="form__sectionForm"
        onSubmit={handleSubmit}
        name="myForm"
      >
        <label className="form__label" htmlFor="name">
          cardholder name
        </label>
        <input
          className="form__input"
          type="text"
          name="name"
          id="name"
          placeholder="Jane Appleseed"
          onChange={handleInput}
          value={props.dataUser.name}
          onBlur={props.handleBlur}
          required
        />
        {props.errors.name && (
          <p className="form__error">{props.errors.name}</p>
        )}
        <label className="form__label" htmlFor="card number">
          card number
        </label>
        <input
          className="form__input"
          type="text"
          name="cardNumber"
          id="cardNumber"
          placeholder="1234 5678 9123 0000"
          onChange={handleInput}
          value={props.dataUser.cardNumber}
          onBlur={props.handleBlur}
          maxLength="19"
          minLength="16"
          required
        />
        {props.errors.cardNumber && (
          <p className="form__error">{props.errors.cardNumber}</p>
        )}
        <div className="form__containerDateAndCvc">
          <div className="form__input--containerDate">
            <label className="form__label" htmlFor="exp. date">
              Exp. Date (MM/YY)
            </label>
            <div className="form__date">
              <input
                className="form__input form__input--date"
                type="text"
                name="month"
                id="month"
                placeholder="MM"
                onChange={handleInput}
                value={props.dataUser.month}
                onBlur={props.handleBlur}
                maxLength="2"
                minLength="2"
                required
              />
              {props.errors.month && (
                <p className="form__error">{props.errors.month}</p>
              )}

              <input
                className="form__input form__input--date"
                type="text"
                name="year"
                id="year"
                placeholder="YY"
                onChange={handleInput}
                value={props.dataUser.year}
                onBlur={props.handleBlur}
                maxLength="2"
                minLength="2"
                required
              />
              {props.errors.year && (
                <p className="form__error">{props.errors.year}</p>
              )}
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
              onChange={handleInput}
              value={props.dataUser.cvc}
              onBlur={props.handleBlur}
              maxLength="3"
              minLength="3"
            />
            {props.errors.cvc && (
              <p className="form__error">{props.errors.cvc}</p>
            )}
          </div>
        </div>
        <Button buttonText={'Confirm'} />
      </form>
    </section>
  );
}

export default Form;
