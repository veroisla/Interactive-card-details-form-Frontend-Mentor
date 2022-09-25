import React from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Form from '../components/Form';
import CardPreview from '../components/CardPreview';
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
  const [errors, setErrors] = useState({});

  const handleBlur = (e) => {
    handleInput(e);
    setErrors(validationsForm(dataUser));
  };

  const validationsForm = (dataUser) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexCardNumber = /^[0-9]{16}$/;
    let regexMonth = /^0[1-9]|1[0-2]$/;
    let regexNumber = /[0-9]$/;
    let regexYear = /^[2-9][0-9]$/;
    let regexCvc = /^[0-9]{3}$/;

    if (!dataUser.name.trim()) {
      errors.name = 'Can´t be blank';
    } else if (!regexName.test(dataUser.name.trim())) {
      errors.name = 'Invalid  format, letters only';
    }
    //---> Correcto

    if (!dataUser.cardNumber.trim()) {
      errors.cardNumber = 'Can´t be blank';
    } else if (!regexCardNumber.test(dataUser.cardNumber.trim())) {
      errors.cardNumber = 'Invalid  format, 16 numbers only';
    }
    // ---> Más o menos

    if (!dataUser.month.trim()) {
      errors.month = 'Can´t be blank';
    } else if (!regexNumber.test(dataUser.month.trim())) {
      errors.month = 'Invalid format, numbers only';
    } else if (!regexMonth.test(dataUser.month.trim())) {
      errors.month = 'Invalid month number 1-12';
    }
    // ---> Más o menos

    if (!dataUser.year.trim()) {
      errors.year = 'Can´t be blank';
    } else if (!regexNumber.test(dataUser.year.trim())) {
      errors.year = 'Invalid format, numbers only';
    } else if (!regexYear.test(dataUser.year.trim())) {
      errors.year = 'Invalid date';
    }
    // ---> Más o menos

    if (!dataUser.cvc.trim()) {
      errors.cvc = 'Can´t be blank';
    } else if (!regexNumber.test(dataUser.cvc.trim())) {
      errors.cvc = 'Invalid format, numbers only';
    } else if (!regexCvc.test(dataUser.cvc.trim())) {
      errors.cvc = 'Invalid format, need 3 numbers';
    }
    return errors;
  };

  //FUNCIÓN PREVENIR ENVÍO POR DEFECTO
  const handleSubmit = (ev) => {
    ev.preventDefault(ev);
    validationsForm(setErrors);
  };

  //FUNCIÓN VALOR INPUT
  const handleInput = (inputValue, inputChanged) => {
    const newCard = {
      ...dataUser,
      [inputChanged]: inputValue,
    };
    setDataUser(newCard);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <CardPreview dataUser={dataUser} />
              <Form
                handleSubmit={handleSubmit}
                handleInput={handleInput}
                dataUser={dataUser}
                handleBlur={handleBlur}
                errors={errors}
              />
            </>
          }
        />
        <Route
          path="/completeCard"
          element={
            <>
              <CompleteState dataUser={dataUser} />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
