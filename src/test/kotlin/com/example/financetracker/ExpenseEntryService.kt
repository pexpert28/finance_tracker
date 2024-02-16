/*package com.example.financetracker
import com.example.financetracker.repository.ExpenseEntryRepository
import com.example.financetracker.service.ExpenseEntryService
import com.example.financetracker.entity.ExpenseEntry
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.InjectMocks
import org.mockito.Mock
import org.mockito.Mockito.`when`
import org.mockito.junit.jupiter.MockitoExtension
import java.util.Optional
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Assertions.assertThrows
import java.math.BigDecimal
import java.time.LocalDate

@ExtendWith(MockitoExtension::class)
class ExpenseEntryServiceTest {

    @Mock
    private lateinit var expenseEntryRepository: ExpenseEntryRepository

    @InjectMocks
    private lateinit var expenseEntryService: ExpenseEntryService

    @Test
    fun `getAllExpenseEntries should return a list of expense entries`() {
        // Arrange
        val expenseEntries = listOf(
            ExpenseEntry(id = 1, date = LocalDate.now(), amount = BigDecimal("50.0"), category = "Groceries", description = "Monthly Grocery Shopping"),
            ExpenseEntry(id = 2, date = LocalDate.now(), amount = BigDecimal("30.0"), category = "Dining", description = "Eating out")
        )

        `when`(expenseEntryRepository.findAll()).thenReturn(expenseEntries)

        // Act
        val result = expenseEntryService.getAllExpenseEntries()

        // Assert
        assertEquals(expenseEntries, result)
    }

    @Test
    fun `getExpenseEntryById should return the correct expense entry`() {
        // Arrange
        val expenseEntry = ExpenseEntry(id = 1, date = LocalDate.now(), amount = BigDecimal("50.0"), category = "Groceries", description = "Monthly Grocery Shopping")
        `when`(expenseEntryRepository.findById(1L)).thenReturn(Optional.of(expenseEntry))

        // Act
        val result = expenseEntryService.getExpenseEntryById(1L)

        // Assert
        assertEquals(Optional.of(expenseEntry), result)
    }

    @Test
    fun `createExpenseEntry should return the created expense entry`() {
        // Arrange
        val newExpenseEntry = ExpenseEntry(date = LocalDate.now(), amount = BigDecimal("50.0"), category = "Clothing", description = "New clothes")
        `when`(expenseEntryRepository.save(newExpenseEntry)).thenReturn(newExpenseEntry)

        // Act
        val result = expenseEntryService.createExpenseEntry(newExpenseEntry)

        // Assert
        assertEquals(newExpenseEntry, result)
    }

    @Test
    fun `updateExpenseEntry should return the updated expense entry`() {
        // Arrange
        val existingExpenseEntry = ExpenseEntry(id = 1, date = LocalDate.now(), amount = BigDecimal("50.0"), category = "Groceries", description = "Monthly Grocery Shopping")
        val updatedExpenseEntry = ExpenseEntry(date = LocalDate.now(), amount = BigDecimal("70.0"), category = "Groceries", description = "Monthly Grocery Shopping")

        `when`(expenseEntryRepository.findById(1L)).thenReturn(Optional.of(existingExpenseEntry))
        `when`(expenseEntryRepository.save(updatedExpenseEntry)).thenReturn(updatedExpenseEntry)

        // Act
        val result = expenseEntryService.updateExpenseEntry(1L, updatedExpenseEntry)

        // Assert
        assertEquals(updatedExpenseEntry, result)
    }

    @Test
    fun `updateExpenseEntry should throw NoSuchElementException for non-existing entry`() {
        // Arrange
        val nonExistingId = 999L
        val updatedExpenseEntry = ExpenseEntry(date = LocalDate.now(), amount = BigDecimal("70.0"), category = "Groceries", description = "Monthly Grocery Shopping")

        `when`(expenseEntryRepository.findById(nonExistingId)).thenReturn(Optional.empty())

        // Act & Assert
        assertThrows(NoSuchElementException::class.java) {
            expenseEntryService.updateExpenseEntry(nonExistingId, updatedExpenseEntry)
        }
    }

    @Test
    fun `deleteExpenseEntry should not throw an exception`() {
        // Arrange & Act
        expenseEntryService.deleteExpenseEntry(1L)

        // Assert
        // If the test reaches this point without throwing an exception, it's considered successful.
    }

    @Test
    fun `deleteExpenseEntry should throw NoSuchElementException for non-existing entry`() {
        // Arrange
        val nonExistingId = 999L
        `when`(expenseEntryRepository.findById(nonExistingId)).thenReturn(Optional.empty())

        // Act & Assert
        assertThrows(NoSuchElementException::class.java) {
            expenseEntryService.deleteExpenseEntry(nonExistingId)
        }
    }
}
*/