/*package com.example.financetracker
import com.example.financetracker.repository.ExpenseEntryRepository
import com.example.financetracker.repository.IncomeEntryRepository
import com.example.financetracker.service.FinanceService
import com.example.financetracker.dto.ExpenseSummaryDTO
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.InjectMocks
import org.mockito.Mock
import org.mockito.junit.jupiter.MockitoExtension
import org.mockito.Mockito.`when`
import java.time.LocalDate

@ExtendWith(MockitoExtension::class)
class FinanceServiceTest {

    @Mock
    private lateinit var incomeRepository: IncomeEntryRepository

    @Mock
    private lateinit var expenseRepository: ExpenseEntryRepository

    @InjectMocks
    private lateinit var financeService: FinanceService

    @Test
    fun `createIncomeAndExpenseAndGetBalance should return correct balance`() {
        // Arrange
        val startDate = LocalDate.parse("2024-01-01")
        val endDate = LocalDate.parse("2024-02-01")

        val income = Income(date = LocalDate.parse("2024-01-15"), amount = 1000.0, category = "Salary", description = "Monthly Salary")
        val expense = Expense(date = LocalDate.parse("2024-01-20"), amount = 500.0, category = "Groceries", description = "Monthly Grocery Shopping")

        // Mock repository methods
        `when`(incomeRepository.calculateTotalIncome(startDate, endDate)).thenReturn(1000.0)
        `when`(expenseRepository.calculateTotalExpenses(startDate, endDate)).thenReturn(500.0)
        `when`(incomeRepository.save(income)).thenReturn(income)
        `when`(expenseRepository.save(expense)).thenReturn(expense)

        // Act
        financeService.createIncome(income)
        financeService.createExpense(expense)
        val result = financeService.calculateBalance(startDate, endDate)

        // Assert
        assert(result == 500.0)
    }

    @Test
    fun `createExpenseAndGetExpenseSummaryByCategory should return correct expense summary`() {
        // Arrange
        val startDate = LocalDate.parse("2024-01-01")
        val endDate = LocalDate.parse("2024-02-01")

        val expense = Expense(date = LocalDate.parse("2024-01-20"), amount = 500.0, category = "Groceries", description = "Monthly Grocery Shopping")

        // Mock repository methods
        `when`(expenseRepository.getExpenseSummaryByCategory(startDate, endDate)).thenReturn(listOf(ExpenseSummaryDTO("Groceries", 500.0)))
        `when`(expenseRepository.save(expense)).thenReturn(expense)

        // Act
        financeService.createExpense(expense)
        val result = financeService.getExpenseSummaryByCategory(startDate, endDate)

        // Assert
        assert(result == listOf(ExpenseSummaryDTO("Groceries", 500.0)))
    }
} */