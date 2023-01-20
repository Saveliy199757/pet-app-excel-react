import React from 'react';
import './scss/index.scss'
import Table from "./components/Table";
import Formula from "./components/Formula";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Formula />
      <Table/>
    </div>
  );
}

export default App;
