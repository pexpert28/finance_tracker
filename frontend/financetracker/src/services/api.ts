import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

export const getExpenseEntries = async () => {
    const response = await axios.get(`${API_BASE_URL}/expense-entries`);
    return response.data;
};
export const getIncomeEntries = async () => {
    const response = await axios.get(`${API_BASE_URL}/income-entries`);
    return response.data;
};
export const addExpenseEntry = async (entry: any) => {
    const response = await axios.post(`${API_BASE_URL}/expense-entries`, entry);
    return response.data;
};
export const addIncomeEntry = async (entry: any) => {
    const response = await axios.post(`${API_BASE_URL}/income-entries`, entry);
    return response.data;
};
export const updateIncomeEntry = async ( entryId: string, updatedEntry: any) => {
    const response = await axios.put(`${API_BASE_URL}/income-entries/${entryId}`, updatedEntry);
    return response.data;
};
export const updateExpenseEntry = async ( entryId: string, updatedEntry: any) => {
    const response = await axios.put(`${API_BASE_URL}/expense-entries/${entryId}`, updatedEntry);
    return response.data;
};
export const deleteExpenseEntry = async ( entryId: string) => {
    await axios.delete(`${API_BASE_URL}/entries/${entryId}`);
};
export const deleteIncomeEntry = async (entryId: string) => {
    await axios.delete(`${API_BASE_URL}/income-entries/${entryId}`);
};
export const getBalance = async (startDate: string, endDate: string) => {
    const response = await axios.get(`${API_BASE_URL}/balance`, {
        params: { startDate, endDate },
    });
    return response.data;
};

export const getExpenseSummary = async (startDate: string, endDate: string) => {
    const response = await axios.get(`${API_BASE_URL}/expense-summary`, {
        params: { startDate, endDate },
    });
    return response.data;
};