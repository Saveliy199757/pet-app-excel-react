import React from 'react';
import Header from "../../components/Header";
import Toolbar from "../../components/Toolbar";
import Formula from "../../components/Formula";
import Table from "../../components/Table";

const ExcelTable = () => {
    return (
        <div className="excel">
            <Header />
            <Toolbar />
            <Formula />
            <Table/>
        </div>
    );
};

export default ExcelTable;