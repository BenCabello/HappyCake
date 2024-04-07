import { Route, Routes } from 'react-router-dom'
import Barra from '../components/navbar'

import HomePage from '../views/HomePage';
import ContactForm from '../views/ContactPage';

import './App.css'


const App = () => {
  return (
  <div>
  <Barra />
  <Routes>
  <Route
  path="/"
  element={<HomePage />}
  />
  <Route
  path="/ContactPage"
  element={<ContactForm />}
  />
  </Routes>
  </div>
  );
  };
  export default App;
  