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

    if (dataUser.name.length === 0) {
      errors.name = 'Can´t be blank';
    } else if (!regexName.test(dataUser.name)) {
      errors.name = 'Invalid format';
    }
    //---> Correcto

    if (dataUser.cardNumber.length === 0) {
      errors.cardNumber = 'Can´t be blank';
    } else if (!regexCardNumber.test(dataUser.cardNumber)) {
      errors.cardNumber = '16 numbers only';
    }

    // ---> Más o menos

    if (dataUser.month.length === 0) {
      errors.month = 'Can´t be blank';
    } else if (!regexNumber.test(dataUser.month)) {
      errors.month = 'Numbers only';
    } else if (!regexMonth.test(dataUser.month)) {
      errors.month = 'Invalid month';
    }
    // ---> Más o menos

    if (dataUser.year.length === 0) {
      errors.year = 'Can´t be blank';
    } else if (!regexNumber.test(dataUser.year)) {
      errors.year = 'Numbers only';
    } else if (!regexYear.test(dataUser.year)) {
      errors.year = 'Invalid date';
    }
    // ---> Más o menos

    if (dataUser.cvc.length === 0) {
      errors.cvc = 'Can´t be blank';
    } else if (!regexNumber.test(dataUser.cvc)) {
      errors.cvc = 'Numbers only';
    } else if (!regexCvc.test(dataUser.cvc)) {
      errors.cvc = 'Need 3 numbers';
    }
    return errors;
  };

  //FUNCIÓN PREVENIR ENVÍO POR DEFECTO
  const handleSubmit = (ev) => {
    ev.preventDefault(ev);
    validationsForm(setErrors);
  };

  //FUNCIÓN VALOR INPUT --> Actualiza la tarjeta con los datos del formulario
  const handleInput = (inputValue, inputChanged) => {
    const newCard = {
      ...dataUser,
      [inputChanged]: inputValue,
    };
    setDataUser(newCard);
  };

  //format cardNUmber
  // const format = (num) => {
  //   try {
  //     let newNum = num.match(/.{1,4}/g).join(" ");
  //     return newNum;
  //   } catch (e) {
  //     console.error("empty number");
  //   }
  // };
  // if edited anyone of imput make action
  // numberInput.addEventListener("input", (e) => {
  //   validateCardNumber(numberInput, errorMesages[1]);
  //   number.textContent = format(numberInput.value);
  // });

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
                handleForm={handleForm}
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
