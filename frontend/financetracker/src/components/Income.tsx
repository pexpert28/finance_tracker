import React from 'react';
import { connect } from 'react-redux';
import IncomeForm from './IncomeForm';
import IncomeList from './IncomeList';
import { addIncomeEntrySuccess } from '../redux_src/action';

const Income: React.FC = () => {
    return (
        <div>
            <h2>Income Section</h2>

            {/* Income Entry Form */}
            <IncomeForm />

            {/* Income Entry List */}
            <IncomeList />
        </div>
    );
};

const mapDispatchToPropsExpenseForm = {
    addIncomeEntrySuccess,
};

export default connect(null, mapDispatchToPropsExpenseForm)(Income);