/* eslint-disable no-unused-vars */

import './App.css';
import MainClass from './components/MainClass'
import MainFunction from './components/MainFunction'
import Counter from './components/Counter'
import CounterFunction from './components/CounterFunction'
import Employees from './components/Employees'
import ParentEmployee from './components/ParentEmployee'
import MainLayout from './components/layout/MainLayout'
//import Header from './layout/Header'

function App() {
  return (
    <>
    {/* <Header/> */}
    <MainLayout/>
      {/* <ParentEmployee /> */}
     {/*  <MainClass/>
      <MainFunction/> */}
    </>
  );
}

export default App;