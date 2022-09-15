import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Form from '../components/Form';

import CardPreview from '../components/CardPreview';
import CompleteState from './CompleteState';

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <CardPreview />
              <Form />
            </>
          }
        />
        <Route
          path="/completeCard"
          element={
            <>
              <CompleteState />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
