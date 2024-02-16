import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import { addExpenseEntrySuccess } from '../redux_src/action';

const Expense: React.FC = () => {
    return (
        <div>
            <h2>Expense Section</h2>

            {/* Expense Entry Form */}
            <ExpenseForm />

            {/* Expense Entry List */}
            <ExpenseList />
        </div>
    );
};

const mapDispatchToPropsExpenseForm = {
    addExpenseEntrySuccess,
};

export default connect(null, mapDispatchToPropsExpenseForm)(Expense);