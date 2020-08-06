import React from 'react';
import logo from './logo.svg';
import './App.css';
import Formy from "./Form"
import * as yup from "yup"

const loginForm=[
    {name:'username', type:'text'},
    {name:'password', type:'password'},
    {name:'phone', type:'text'}
]

const eventForm=[
    {name:'name', type:'text'},
    {name:'date', type:'date'}
]

function App() {
  return (
      <div className="App">
          <h1>login form</h1>
          <Formy schema={loginForm} />
          <br/><br/><br/>
          <h1>create event form</h1>
          <Formy schema={eventForm} />
      </div>
  );
}

export default App;
