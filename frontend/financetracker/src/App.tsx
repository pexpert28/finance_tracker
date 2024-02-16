import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Expense from "./components/Expense";
import Income from "./components/Income";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SummaryView from "./components/SummaryView";
const App: React.FC = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/income" element={<Income/>} />
                    <Route path="/expense" element={<Expense/>} />
                    <Route path="/summary"  element={<SummaryView/>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
