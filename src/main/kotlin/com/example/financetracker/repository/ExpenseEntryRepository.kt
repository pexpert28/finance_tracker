package com.example.financetracker.repository
import com.example.financetracker.entity.ExpenseEntry
import com.example.financetracker.dto.ExpenseSummaryDTO
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import java.time.LocalDate
@Repository
interface ExpenseEntryRepository : JpaRepository<ExpenseEntry, Long>{
    @Query("SELECT COALESCE(SUM(i.amount), 0) FROM ExpenseEntry i WHERE i.date BETWEEN :startDate AND :endDate")
    fun calculateTotalExpenses(
        @Param("startDate") startDate: LocalDate,
        @Param("endDate") endDate: LocalDate
    ): Double
    @Query("SELECT e.category, SUM(e.amount) FROM ExpenseEntry e WHERE e.date BETWEEN :startDate AND :endDate GROUP BY e.category")
    fun getExpenseSummaryByCategory(
        @Param("startDate") startDate: LocalDate,
        @Param("endDate") endDate: LocalDate
    ): List<ExpenseSummaryDTO>
}