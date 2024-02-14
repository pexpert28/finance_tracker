package com.example.financetracker.repository

import com.example.financetracker.entity.IncomeEntry
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import java.time.LocalDate
import org.springframework.stereotype.Repository

@Repository
interface IncomeEntryRepository : JpaRepository<IncomeEntry, Long>{
    @Query("SELECT COALESCE(SUM(i.amount), 0) FROM IncomeEntry i WHERE i.date BETWEEN :startDate AND :endDate")
    fun calculateTotalIncome(
        @Param("startDate") startDate: LocalDate,
        @Param("endDate") endDate: LocalDate
    ): Double
}