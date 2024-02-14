package com.example.financetracker.dto

import java.math.BigDecimal

data class ExpenseSummaryDTO(
    val category: String,
    val totalAmount: BigDecimal
)