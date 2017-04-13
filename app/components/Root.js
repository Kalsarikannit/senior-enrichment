import React, { Component } from 'react';

import MenuContainer from '../containers/MenuContainer';
// import Menu from '../components/Menu'
import CampusesContainer from '../containers/CampusesContainer'

export default function App ({ children }) {
  return (
    <div id="main" className="container-fluid">
      <div className="col-xs-2">
        <MenuContainer />
      </div>
      <div className="col-xs-10">
        <CampusesContainer/ >
      </div>
    </div>
  );
}
