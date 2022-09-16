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

    if (!dataUser.name.trim()) {
      errors.name = 'el campo nombre es requerido';
    }

    return errors;
  };

  //

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
