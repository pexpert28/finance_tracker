import React, { useEffect ,useState } from 'react';
import { connect } from 'react-redux';
import { getBalance, getExpenseSummary } from '../services/api';

const SummaryView = ({
                         startDate: initialStartDate,
                         endDate: initialEndDate,
                         balance,
                         expenseSummary,
                         fetchBalance,
                         fetchExpenseSummary
                     }: any) => {
    const [startDate, setStartDate] = useState(initialStartDate || "2024-01-01");
    const [endDate, setEndDate] = useState(initialEndDate || "2024-12-31");

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>, type: "start" | "end") => {
        const newDate = e.target.value;
        if (type === "start") {
            setStartDate(newDate);
        } else {
            setEndDate(newDate);
        }
    };

    const handleSubmit = () => {
        fetchBalance(startDate, endDate);
        fetchExpenseSummary(startDate, endDate);
    };

    useEffect(() => {
        fetchBalance(startDate, endDate);
        fetchExpenseSummary(startDate, endDate);
    }, [startDate, endDate, fetchBalance, fetchExpenseSummary]);

    // Check if expenseSummary is defined and an array
    if (!expenseSummary || !Array.isArray(expenseSummary)) {
        return <div>Loading...</div>; // You can replace this with any loading indicator or message
    }

    return (
        <div>
            <h2>Summary View</h2>
            <div>
                <label>Start Date:</label>
                <input type="date" value={startDate} onChange={(e) => handleDateChange(e, "start")} />
            </div>
            <div>
                <label>End Date:</label>
                <input type="date" value={endDate} onChange={(e) => handleDateChange(e, "end")} />
            </div>
            <button onClick={handleSubmit}>Submit</button>
            <p>Balance: {balance}</p>
            <h3>Expense Summary by Categories</h3>
            <ul>
                {expenseSummary.map((category: any) => (
                    <li key={category.category}>
                        {category.category}: {category.totalAmount}
                    </li>
                ))}
            </ul>
        </div>
    );
};


const mapStateToProps = (state: any) => ({
    startDate: state.startDate,
    endDate: state.endDate,
    balance: state.balance,
    expenseSummary: state.expenseSummary,
});

const mapDispatchToProps = (dispatch: any) => ({
    fetchBalance: (startDate: string, endDate: string) => dispatch(getBalance(startDate, endDate)),
    fetchExpenseSummary: (startDate: string, endDate: string) => dispatch(getExpenseSummary(startDate, endDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SummaryView);