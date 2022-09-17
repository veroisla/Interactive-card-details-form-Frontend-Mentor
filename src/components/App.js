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

  //
  const [errors, setErrors] = useState({});

  const handleBlur = (e) => {
    handleInput(e);
    setErrors(validationsForm(dataUser));
  };

  const validationsForm = (dataUser) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

    if (!dataUser.name.trim()) {
      errors.name = 'Can´t be blank';
    } else if (!regexName.test(dataUser.name.trim())) {
      errors.name = 'Wrong format, letters only';
    }
    //---> Correcto

    if (!dataUser.cardNumber.trim()) {
      errors.cardNumber = 'Can´t be blank';
    }

    // if (!dataUser.cardNumber.trim()) {
    //   errors.cardNumber = 'Can´t be blank';
    // }
    // if (!dataUser.month.trim()) {
    //   errors.month = 'Can´t be blank';
    // }
    // if (!dataUser.year.trim()) {
    //   errors.year = 'Can´t be blank';
    // }
    // if (!dataUser.cvc.trim()) {
    //   errors.cvc = 'Can´t be blank';
    // } else if (!regex.test(dataUser.cvc.trim())) {
    //   errors.cvc = 'Wrong format, only 3 numbers';
    // } else {
    //   console.log('Formulario correcto');
    // }
    return errors;
  };

  //FUNCIÓN PREVENIR ENVÍO POR DEFECTO
  const handleSubmit = (ev) => {
    ev.preventDefault(ev);
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
