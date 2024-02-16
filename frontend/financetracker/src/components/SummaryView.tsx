import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux_src/reducer';
import { updateBalanceSucess } from '../redux_src/action';
import { getBalance } from '../services/api';
const SummaryView: React.FC = () => {
    const dispatch = useDispatch();
    const balance = useSelector((state: RootState) => state.balance);

    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>, dateType: 'start' | 'end') => {
        const selectedDate = event.target.value;
        if (dateType === 'start') {
            setStartDate(selectedDate);
        } else {
            setEndDate(selectedDate);
        }
    };

    const handleFetchBalance = async () => {
        try {
            // Perform API call to fetch balance based on start and end dates
            const result = await getBalance(startDate, endDate);
            // Dispatch an action to update the balance in the Redux store
            dispatch(updateBalanceSucess(result));
        } catch (error) {
            console.error('Error fetching balance:', error);
        }
    };
    const expenseSummary = useSelector((state: RootState) => state.expenseSummary);
    const incomeSummary = useSelector((state: RootState) => state.incomeSummary);
    console.log(expenseSummary)
    return (
        <div>
            <h2>Summary</h2>

            <div>
                <label>Start Date:</label>
                <input type="date" value={startDate} onChange={(e) => handleDateChange(e, 'start')}/>
            </div>

            <div>
                <label>End Date:</label>
                <input type="date" value={endDate} onChange={(e) => handleDateChange(e, 'end')}/>
            </div>

            <button onClick={handleFetchBalance}>Fetch Balance</button>

            <p>Balance: {balance}</p>
            <h3>Expense Summary</h3>
            <ul>
                {Object.entries(expenseSummary).map(([category, amount]) => (
                    <li key={category}>
                        <div>
                            Date: {category} | Amount: {amount}
                        </div>
                    </li>
                ))}
            </ul>

            <h3>Income Summary</h3>
            <ul>
                {Object.entries(incomeSummary).map(([category, amount]) => (
                    <li key={category}>
                        <div>
                            Date: {category} | Amount: {amount}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SummaryView;