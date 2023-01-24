import React from 'react';
import {Link} from "react-router-dom";
import {TABLE} from "../../urls";

const CreateTable = () => {
    return (
        <div className="dashboard">
            <div className="dashboard__header">
                <h1>Панель Управления</h1>
            </div>
            <div className="dashboard__create">
                <div className="dashboard__container">
                    <Link to={TABLE} className="dashboard__button">
                        Новая таблица
                    </Link>
                </div>
            </div>
            <div className="dashboard__table">
                <div className="dashboard__container">
                </div>
            </div>
        </div>
    );
};

export default CreateTable;