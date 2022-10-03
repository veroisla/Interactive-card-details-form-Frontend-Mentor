import React from 'react';
import '../styles/components/Form.scss';
import Button from './Button';

function Form(props) {
  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputChanged = ev.target.name;
    props.handleInput(inputValue, inputChanged);
  };

  const handleName = (ev) => {
    props.validateName(props.setErrors);
  };

  return (
    <section className="form">
      <form
        action=""
        method="POST"
        className="form__sectionForm"
        onSubmit={props.handleSubmit}
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
          maxLength="32"
          onKeyUp={handleName}
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
          placeholder="e.g. 1234 5678 9123 0000"
          onChange={handleInput}
          value={props.dataUser.cardNumber}
          maxLength="16"
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
              <div className="form__dateAndAlert">
                <input
                  className="form__input form__input--date"
                  type="text"
                  name="month"
                  id="month"
                  placeholder="MM"
                  onChange={handleInput}
                  value={props.dataUser.month}
                  maxLength="2"
                  minLength="2"
                />
                {props.errors.month && (
                  <p className="form__error">{props.errors.month}</p>
                )}
              </div>

              <div className="form__dateAndAlert">
                <input
                  className="form__input form__input--date"
                  type="text"
                  name="year"
                  id="year"
                  placeholder="YY"
                  onChange={handleInput}
                  value={props.dataUser.year}
                  maxLength="2"
                  minLength="2"
                />
                {props.errors.year && (
                  <p className="form__error">{props.errors.year}</p>
                )}
              </div>
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
              maxLength="3"
            />
            {props.errors.cvc && (
              <p className="form__error">{props.errors.cvc}</p>
            )}
          </div>
        </div>
        <Button
          buttonText={'Confirm'}
          dataUser={props.dataUser}
          handleForm={props.handleForm}
          errors={props.errors}
        />
      </form>
    </section>
  );
}

export default Form;
