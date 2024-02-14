package com.example.financetracker.entity
import java.math.BigDecimal
import java.time.LocalDate
import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
@Entity
data class ExpenseEntry (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null,
    val date: LocalDate,
    val amount: BigDecimal,
    val category: String,
    val description: String
)