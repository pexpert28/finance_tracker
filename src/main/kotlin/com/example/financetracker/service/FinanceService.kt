package com.example.financetracker.service
import com.example.financetracker.repository.ExpenseEntryRepository
import com.example.financetracker.repository.IncomeEntryRepository
import com.example.financetracker.dto.ExpenseSummaryDTO
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import java.time.LocalDate

@Service
class FinanceService @Autowired constructor(
    private val incomeRepository: IncomeEntryRepository,
    private val expenseRepository: ExpenseEntryRepository
) {

    fun calculateBalance(startDate: LocalDate, endDate: LocalDate): Double {
        try {
            val totalIncome = incomeRepository.calculateTotalIncome(startDate, endDate)
            val totalExpenses = expenseRepository.calculateTotalExpenses(startDate, endDate)
            return totalIncome - totalExpenses
        } catch (e: Exception) {
        throw RuntimeException("Error calculating balance", e)
        }
    }
    fun getExpenseSummaryByCategory(startDate: LocalDate, endDate: LocalDate): List<ExpenseSummaryDTO> {
        try {
            return expenseRepository.getExpenseSummaryByCategory(startDate, endDate)
        }catch (e: Exception) {
            throw RuntimeException("Error fetching expense summary by category", e)
        }
    }
}