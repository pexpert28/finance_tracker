import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchIncomeEntriesSuccess, deleteIncomeEntrySuccess, editIncomeEntrySuccess } from '../redux_src/action';
import { getIncomeEntries, deleteIncomeEntry, updateIncomeEntry } from '../services/api';

interface EditedEntry {
    id: string;
    date: string;
    amount: number;
    category: string;
    description: string;
}

const IncomeList = ({ incomeEntries, fetchIncomeEntriesSuccess, deleteIncomeEntrySuccess, editIncomeEntrySuccess }: any) => {
    const [editMode, setEditMode] = useState(false);
    const [editedEntry, setEditedEntry] = useState<EditedEntry | {}>({});
    const [editedDescription, setEditedDescription] = useState('');
    const [editedDate, setEditedDate] = useState('');
    const [editedAmount, setEditedAmount] = useState(0);
    const [editedCategory, setEditedCategory] = useState('');

    useEffect(() => {
        const fetchEntries = async () => {
            try {
                const data = await getIncomeEntries();
                fetchIncomeEntriesSuccess(data);
            } catch (error) {
                console.error('Error fetching income entries:', error);
            }
        };

        fetchEntries();
    }, [fetchIncomeEntriesSuccess]);

    const handleDelete = async (entryId: string) => {
        try {
            await deleteIncomeEntry(entryId);
            deleteIncomeEntrySuccess(entryId);
        } catch (error) {
            console.error('Error deleting income entry:', error);
        }
    };

    const handleEdit = (entry: EditedEntry) => {
        setEditMode(true);
        setEditedEntry(entry);
        setEditedDate(entry.date);
        setEditedAmount(entry.amount);
        setEditedCategory(entry.category);
        setEditedDescription(entry.description);
    };

    const handleUpdate = async () => {
        try {
            if ('id' in editedEntry) {
                const updatedEntry: EditedEntry = {
                    id: editedEntry.id,
                    date: editedDate,
                    amount: editedAmount,
                    category: editedCategory,
                    description: editedDescription,
                };
                await updateIncomeEntry(editedEntry.id, updatedEntry);
                editIncomeEntrySuccess(updatedEntry);
                setEditMode(false);
            }
        } catch (error) {
            console.error('Error updating income entry:', error);
        }
    };

    return (
        <div>
            <h2>Income Entries</h2>
            <ul>
                {incomeEntries.map((entry: any) => (
                    <li key={entry.id}>
                        Date: {entry.date} | Amount: {entry.amount} | Category: {entry.category} | Description: {entry.description}
                        <button onClick={() => handleDelete(entry.id)}>Delete</button>
                        <button onClick={() => handleEdit(entry)}>Edit</button>
                    </li>
                ))}
            </ul>
            {editMode && (
                <div>
                    <h3>Edit Entry</h3>
                    <label>Date:</label>
                    <input type="date" value={editedDate} onChange={(e) => setEditedDate(e.target.value)} />
                    <br />
                    <label>Amount:</label>
                    <input type="number" value={editedAmount} onChange={(e) => setEditedAmount(parseFloat(e.target.value))} />
                    <br />
                    <label>Category:</label>
                    <input type="text" value={editedCategory} onChange={(e) => setEditedCategory(e.target.value)} />
                    <br />
                    <label>Description:</label>
                    <input type="text" value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)} />
                    <br />
                    <button onClick={handleUpdate}>Update</button>
                </div>
            )}
        </div>
    );
};

const mapStateToProps = (state: any) => ({
    incomeEntries: state.incomeEntries,
});

const mapDispatchToProps = {
    fetchIncomeEntriesSuccess,
    deleteIncomeEntrySuccess,
    editIncomeEntrySuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(IncomeList);