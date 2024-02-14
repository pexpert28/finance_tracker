package com.example.financetracker.service

import com.example.financetracker.entity.IncomeEntry
import com.example.financetracker.repository.IncomeEntryRepository
import org.springframework.stereotype.Service
import java.util.*

@Service
class IncomeEntryService(private val incomeEntryRepository: IncomeEntryRepository) {
    fun getAllIncomeEntries(): List<IncomeEntry> = incomeEntryRepository.findAll()

    fun getIncomeEntryById(id: Long): Optional<IncomeEntry> = incomeEntryRepository.findById(id)

    fun createIncomeEntry(incomeEntry: IncomeEntry): IncomeEntry = incomeEntryRepository.save(incomeEntry)

    fun updateIncomeEntry(id: Long, updatedIncomeEntry: IncomeEntry): IncomeEntry {
        val existingIncomeEntry = incomeEntryRepository.findById(id).orElseThrow { NoSuchElementException("ExpenseEntry not found with id: $id") }

        val updatedIncome = existingIncomeEntry.copy(
            date = updatedIncomeEntry.date,
            amount = updatedIncomeEntry.amount,
            category = updatedIncomeEntry.category,
            description = updatedIncomeEntry.description
        )

        return incomeEntryRepository.save(updatedIncome)
    }
    fun deleteIncomeEntry(id: Long) {
        incomeEntryRepository.deleteById(id)
    }
}