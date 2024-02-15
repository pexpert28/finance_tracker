import React, { useState, useEffect } from 'react';

const EntryForm = ({ entryType, entry, onCancel, onUpdate, onAdd }: any) => {
    const [formData, setFormData] = useState({
        date: '',
        amount: '',
        category: '',
        description: '',
    });

    useEffect(() => {
        if (entry) {
            setFormData({
                date: entry.date,
                amount: entry.amount,
                category: entry.category,
                description: entry.description,
            });
        }
    }, [entry]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Call the appropriate action (add or update) based on the entryType
        const action = entry ? onUpdate : onAdd;
        action(formData);

        setFormData({
            date: '',
            amount: '',
            category: '',
            description: '',
        });
    };

    return (
        <div>
            <h2>{entry ? 'Edit Entry' : 'Add Entry'}</h2>
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
                <button type="submit">{entry ? 'Update Entry' : 'Add Entry'}</button>
                <button type="button" onClick={onCancel}>
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default EntryForm;