export const FETCH_INCOME_ENTRIES_SUCCESS = 'FETCH_INCOME_ENTRIES_SUCCESS';
export const ADD_INCOME_ENTRY_SUCCESS = 'ADD_INCOME_ENTRY_SUCCESS';
export const EDIT_INCOME_ENTRY_SUCCESS = 'EDIT_INCOME_ENTRY_SUCCESS';
export const DELETE_INCOME_ENTRY_SUCCESS = 'DELETE_INCOME_ENTRY_SUCCESS';

export const FETCH_EXPENSE_ENTRIES_SUCCESS = 'FETCH_EXPENSE_ENTRIES_SUCCESS';
export const ADD_EXPENSE_ENTRY_SUCCESS = 'ADD_EXPENSE_ENTRY_SUCCESS';
export const EDIT_EXPENSE_ENTRY_SUCCESS = 'EDIT_EXPENSE_ENTRY_SUCCESS';
export const DELETE_EXPENSE_ENTRY_SUCCESS = 'DELETE_EXPENSE_ENTRY_SUCCESS';
export const FETCH_BALANCE_SUCCESS = 'FETCH_BALANCE_SUCCESS';
export const FETCH_EXPENSE_SUMMARY_SUCCESS = 'FETCH_EXPENSE_SUMMARY_SUCCESS';
export const fetchIncomeEntriesSuccess = (entries: any[]) => ({
    type: FETCH_INCOME_ENTRIES_SUCCESS,
    payload: entries,
});

export const addIncomeEntrySuccess = (entry: any) => ({
    type: ADD_INCOME_ENTRY_SUCCESS,
    payload: entry,
});

export const editIncomeEntrySuccess = (entry: any) => ({
    type: EDIT_INCOME_ENTRY_SUCCESS,
    payload: entry,
});

export const deleteIncomeEntrySuccess = (entryId: string) => ({
    type: DELETE_INCOME_ENTRY_SUCCESS,
    payload: entryId,
});

export const fetchExpenseEntriesSuccess = (entries: any[]) => ({
    type: FETCH_EXPENSE_ENTRIES_SUCCESS,
    payload: entries,
});

export const addExpenseEntrySuccess = (entry: any) => ({
    type: ADD_EXPENSE_ENTRY_SUCCESS,
    payload: entry,
});

export const editExpenseEntrySuccess = (entry: any) => ({
    type: EDIT_EXPENSE_ENTRY_SUCCESS,
    payload: entry,
});

export const deleteExpenseEntrySuccess = (entryId: string) => ({
    type: DELETE_EXPENSE_ENTRY_SUCCESS,
    payload: entryId,
});
export const fetchBalanceSuccess = (balance: number) => ({
    type: FETCH_BALANCE_SUCCESS,
    payload: balance,
});

export const fetchExpenseSummarySuccess = (expenseSummary: any[]) => ({
    type: FETCH_EXPENSE_SUMMARY_SUCCESS,
    payload: expenseSummary,
});