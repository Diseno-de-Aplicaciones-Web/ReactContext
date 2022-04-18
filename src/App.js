import logo from './logo.svg';
import './App.css';
import { useState, createContext } from 'react';

import MainPage from './views/MainPage';

export const Context = createContext();

function App() {

  const [ cosas, setCosas ] = useState("Cositas");

  return (
    <Context.Provider value={cosas}>
      <MainPage/>
    </Context.Provider>
  );
}

export default App;
