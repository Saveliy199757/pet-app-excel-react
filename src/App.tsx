import React from "react";
import "./scss/index.scss";
import { Route, Routes } from "react-router";
import { CREATE_TABLE, TABLE } from "./urls";
import CreateTable from "./pages/CreateTable";
import ExcelTable from "./pages/ExcelTable";

function App() {
  return (
    <Routes>
      <Route path={CREATE_TABLE} element={<CreateTable />} />
      <Route path={TABLE} element={<ExcelTable />} />
    </Routes>
  );
}

export default App;
