import React from 'react';
import { useState } from 'react';
import Form from '../components/Form';
import CardPreview from '../components/CardPreview';
import '../styles/components/App.scss';
import CompleteState from './CompleteState';

function App() {
  const [dataUser, setDataUser] = useState({
    name: '',
    cardNumber: '',
    month: '',
    year: '',
    cvc: '',
  });

  //VALIDACIÓN FORMULARIO
  const [errors, setErrors] = useState({
    name: '',
    cardNumber: '',
    month: '',
    year: '',
    cvc: '',
  });

  //RETOENAR COMPLETE COMPONENTE
  const [completeOk, setCompleteOk] = useState({
    name: false,
    cardNumber: false,
    month: false,
    year: false,
    cvc: false,
  });

  //LLAMA FUNCION QUE GUARDA VALOR INPUT Y FUNCION DE VALIDACION, ejecuta la función al pulsar el botón de confirm
  const handleForm = (e) => {
    handleInput(e);
    setErrors(validationsForm(dataUser));
  };

  const validationsForm = (dataUser) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexCardNumber = /[0-9]{16}$/;
    let regexMonth = /^0[1-9]|1[0-2]$/;
    let regexNumber = /[0-9]$/;
    let regexYear = /^[2-9][0-9]$/;
    let regexCvc = /^[0-9]{3}$/;

    if (dataUser.name === '') {
      errors.name = 'Can´t be blank';
    } else if (!regexName.test(dataUser.name)) {
      errors.name = 'Invalid format';
    } else if (errors.name !== '') {
      completeOk.name = true;
    }

    if (dataUser.cardNumber === '') {
      errors.cardNumber = 'Can´t be blank';
    } else if (!regexCardNumber.test(dataUser.cardNumber)) {
      errors.cardNumber = '16 numbers only';
    } else if (errors.cardNumber !== '') {
      completeOk.cardNumber = true;
    }

    // --> .replace(' ', '') Si el usuario mete un espacio quitalo

    if (dataUser.month === '') {
      errors.month = 'Can´t be blank';
    } else if (!regexNumber.test(dataUser.month)) {
      errors.month = 'Numbers only';
    } else if (!regexMonth.test(dataUser.month)) {
      errors.month = 'Invalid month';
    } else if (errors.month !== '') {
      completeOk.month = true;
    }

    if (dataUser.year === '') {
      errors.year = 'Can´t be blank';
    } else if (!regexNumber.test(dataUser.year)) {
      errors.year = 'Numbers only';
    } else if (!regexYear.test(dataUser.year)) {
      errors.year = 'Invalid date';
    } else if (errors.year !== '') {
      completeOk.year = true;
    }

    if (dataUser.cvc === '') {
      errors.cvc = 'Can´t be blank';
    } else if (!regexNumber.test(dataUser.cvc)) {
      errors.cvc = 'Numbers only';
    } else if (!regexCvc.test(dataUser.cvc)) {
      errors.cvc = 'Need 3 numbers';
    } else if (errors.cvc !== '') {
      completeOk.cvc = true;
    }
    return errors;
  };

  //FUNCIÓN PREVENIR ENVÍO POR DEFECTO
  const handleSubmit = (ev) => {
    ev.preventDefault(ev);
  };

  //FUNCIÓN VALOR INPUT --> Actualiza la tarjeta con los datos del formulario
  const handleInput = (inputValue, inputChanged) => {
    const newCard = {
      ...dataUser,
      [inputChanged]: inputValue,
    };
    setDataUser(newCard);
  };

  return (
    <>
      <div className="previewAndForm">
        <CardPreview dataUser={dataUser} />

        {completeOk.name === true &&
        completeOk.cardNumber === true &&
        completeOk.month === true &&
        completeOk.year === true &&
        completeOk.cvc === true ? (
          <CompleteState dataUser={dataUser} />
        ) : (
          <Form
            handleSubmit={handleSubmit}
            handleInput={handleInput}
            dataUser={dataUser}
            handleForm={handleForm}
            errors={errors}
          />
        )}
      </div>
    </>
  );
}

export default App;

//holaaaaa
