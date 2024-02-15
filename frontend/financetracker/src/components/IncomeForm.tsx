import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addIncomeEntrySuccess} from '../store/action';
import { addIncomeEntry } from '../services/api';
const IncomeForm = ({ addIncomeEntrySuccess }: any) => {
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
            const newEntry = await addIncomeEntry(formData);
            addIncomeEntrySuccess(newEntry);
            setFormData({
                date: '',
                amount: '',
                category: '',
                description: '',
            });
        } catch (error) {
            console.error('Error adding income entry:', error);
        }
    };

    return (
        <div>
            <h2>Add Income Entry</h2>
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
                <button type="submit">Add Income Entry</button>
            </form>
        </div>
    );
};

const mapDispatchToPropsIncomeForm = {
    addIncomeEntrySuccess,
};

export default connect(null, mapDispatchToPropsIncomeForm)(IncomeForm);