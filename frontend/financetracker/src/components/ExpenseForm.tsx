import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addExpenseEntrySuccess} from '../redux_src/action';
import { addExpenseEntry } from '../services/api';
const ExpenseForm = ({ addExpenseEntrySuccess }: any) => {
    const [formData, setFormData] = useState({
        date: '',
        amount: '',
        category: '',
        description: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const newEntry = await addExpenseEntry(formData);
            addExpenseEntrySuccess(newEntry);
            setFormData({
                date: '',
                amount: '',
                category: '',
                description: '',
            });
        } catch (error) {
            console.error('Error adding expense entry:', error);
        }
    };

    return (
        <div>
            <h2>Add Expense Entry</h2>
            <form onSubmit={handleSubmit}>
                <label>Date:</label>
                <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                <br />
                <label>Amount:</label>
                <input type="number" name="amount" value={formData.amount} onChange={handleChange} required />
                <br />
                <label>Category:</label>
                <input type="text" name="category" value={formData.category} onChange={handleChange} required />
                <br />
                <label>Description:</label>
                <input type="text" name="description" value={formData.description} onChange={handleChange} required />
                <br />
                <button type="submit">Add Expense Entry</button>
            </form>
        </div>
    );
};

const mapDispatchToPropsExpenseForm = {
    addExpenseEntrySuccess,
};

export default connect(null, mapDispatchToPropsExpenseForm)(ExpenseForm);