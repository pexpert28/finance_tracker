import React from 'react';
import ExpenseList from "./components/ExpenseList";
import IncomeList from "./components/IncomeList";
import IncomeForm from "./components/IncomeForm";
import ExpenseForm from "./components/ExpenseForm";
import SummaryView from "./components/SummaryView";
const App: React.FC = () => {
    return (
        <div>
            <IncomeForm/>
            <ExpenseForm />
            <ExpenseList />
            <IncomeList />
            <SummaryView />
        </div>
    );
};

export default App;
