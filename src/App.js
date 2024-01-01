import React from 'react';
import AppRouter from './Router';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div>
      <AppRouter />
      <ToastContainer autoClose={3000} />
    </div>
  );
};

export default App;
