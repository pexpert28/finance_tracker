import { combineReducers } from 'redux';
import {
    FETCH_INCOME_ENTRIES_SUCCESS,
    ADD_INCOME_ENTRY_SUCCESS,
    EDIT_INCOME_ENTRY_SUCCESS,
    DELETE_INCOME_ENTRY_SUCCESS,
    FETCH_EXPENSE_ENTRIES_SUCCESS,
    ADD_EXPENSE_ENTRY_SUCCESS,
    EDIT_EXPENSE_ENTRY_SUCCESS,
    DELETE_EXPENSE_ENTRY_SUCCESS,
    FETCH_BALANCE_SUCCESS,
    FETCH_EXPENSE_SUMMARY_SUCCESS,
} from './action';

interface Entry {
    // Define the structure of an entry here
    id: number;
    date: string;
    amount: number;
    category: string;
    description: string;
    // Add any other fields as needed
}

const defaultIncomeEntries: Entry[] = [];
const defaultExpenseEntries: Entry[] = [];

const incomeEntriesReducer = (state = defaultIncomeEntries, action: any) => {
    switch (action.type) {
        case FETCH_INCOME_ENTRIES_SUCCESS:
            return action.payload;
        case ADD_INCOME_ENTRY_SUCCESS:
            return [...state, action.payload];
        case EDIT_INCOME_ENTRY_SUCCESS:
            return state.map((entry: any) => (entry.id === action.payload.id ? action.payload : entry));
        case DELETE_INCOME_ENTRY_SUCCESS:
            return state.filter((entry: any) => entry.id !== action.payload.id);
        case FETCH_BALANCE_SUCCESS:
            return {
                ...state,
                balance: action.payload,
            };

        case FETCH_EXPENSE_SUMMARY_SUCCESS:
            return {
                ...state,
                expenseSummary: action.payload,
            };
        default:
            return state;
    }
};

const expenseEntriesReducer = (state = defaultExpenseEntries, action: any) => {
    switch (action.type) {
        case FETCH_EXPENSE_ENTRIES_SUCCESS:
            return action.payload;
        case ADD_EXPENSE_ENTRY_SUCCESS:
            return [...state, action.payload];
        case EDIT_EXPENSE_ENTRY_SUCCESS:
            return state.map((entry: any) => (entry.id === action.payload.id ? action.payload : entry));
        case DELETE_EXPENSE_ENTRY_SUCCESS:
            return state.filter((entry: any) => entry.id !== action.payload.id);
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    incomeEntries: incomeEntriesReducer,
    expenseEntries: expenseEntriesReducer,
});

export default rootReducer;