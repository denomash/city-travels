import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import TourList from './components/TourList';

function App() {
  return (
    <Fragment>
      <Navbar />
      <TourList />
    </Fragment>
  );
}

export default App;
