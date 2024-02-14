package com.example.financetracker.service

import com.example.financetracker.entity.ExpenseEntry
import com.example.financetracker.repository.ExpenseEntryRepository
import org.springframework.stereotype.Service
import java.util.*

@Service
class ExpenseEntryService(private val expenseEntryRepository: ExpenseEntryRepository) {
    fun getAllExpenseEntries(): List<ExpenseEntry> = expenseEntryRepository.findAll()

    fun getExpenseEntryById(id: Long): Optional<ExpenseEntry> = expenseEntryRepository.findById(id)

    fun createExpenseEntry(expenseEntry: ExpenseEntry): ExpenseEntry = expenseEntryRepository.save(expenseEntry)

    fun updateExpenseEntry(id: Long, updatedExpenseEntry: ExpenseEntry): ExpenseEntry {
        val existingExpenseEntry = expenseEntryRepository.findById(id).orElseThrow { NoSuchElementException("ExpenseEntry not found with id: $id") }

        val updatedExpense = existingExpenseEntry.copy(
            date = updatedExpenseEntry.date,
            amount = updatedExpenseEntry.amount,
            category = updatedExpenseEntry.category,
            description = updatedExpenseEntry.description
        )

        return expenseEntryRepository.save(updatedExpense)
    }

    fun deleteExpenseEntry(id: Long) {
        expenseEntryRepository.deleteById(id)
    }
}