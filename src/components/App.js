import React from 'react';
import { useState } from 'react';
import Form from '../components/Form';
import CardPreview from '../components/CardPreview';
import CompleteState from './CompleteState';

function App() {
  let alert = [true, true, true, true, true];

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

  //LLAMA FUNCION QUE GUARDA VALOR INPUT Y FUNCION DE VALIDACION
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

    alert[0] = false;
    alert[1] = false;
    alert[2] = false;
    alert[3] = false;
    alert[4] = false;

    if (dataUser.name === '') {
      errors.name = 'Can´t be blank';
      alert.name = true;
    } else if (!regexName.test(dataUser.name)) {
      errors.name = 'Invalid format';
      alert.name = true;
    }

    if (dataUser.cardNumber === '') {
      errors.cardNumber = 'Can´t be blank';
      alert.cardNumber = true;
    } else if (!regexCardNumber.test(dataUser.cardNumber.replace(' ', ''))) {
      errors.cardNumber = '16 numbers only';
      alert.cardNumber = true;
    }
    // --> .replace(' ', '') Si el usuario mete un espacio quitalo

    if (dataUser.month === '') {
      errors.month = 'Can´t be blank';
      alert.month = true;
    } else if (!regexNumber.test(dataUser.month)) {
      errors.month = 'Numbers only';
    } else if (!regexMonth.test(dataUser.month)) {
      errors.month = 'Invalid month';
      alert.month = true;
    }

    if (dataUser.year === '') {
      errors.year = 'Can´t be blank';
      alert.year = true;
    } else if (!regexNumber.test(dataUser.year)) {
      errors.year = 'Numbers only';
    } else if (!regexYear.test(dataUser.year)) {
      errors.year = 'Invalid date';
      alert.year = true;
    }

    if (dataUser.cvc === '') {
      errors.cvc = 'Can´t be blank';
      alert.cvc = true;
    } else if (!regexNumber.test(dataUser.cvc)) {
      errors.cvc = 'Numbers only';
    } else if (!regexCvc.test(dataUser.cvc)) {
      errors.cvc = 'Need 3 numbers';
      alert.cvc = true;
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

  return (
    <>
      <CardPreview dataUser={dataUser} />
      {alert.every((index) => {
        return alert[index];
      }) ? (
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
    </>
  );
}

export default App;

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
