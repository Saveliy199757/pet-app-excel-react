import React from 'react';
import './scss/index.scss'
import Table from "./components/Table";
import Formula from "./components/Formula";
import Header from "./components/Header";
import Toolbar from "./components/Toolbar";

function App() {
  return (
    <div>
      <Header />
      <Toolbar />
      <Formula />
      <Table/>
    </div>
  );
}

export default App;
