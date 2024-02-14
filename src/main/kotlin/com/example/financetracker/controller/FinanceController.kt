package com.example.financetracker.controller
import com.example.financetracker.service.FinanceService
import com.example.financetracker.dto.ExpenseSummaryDTO
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import java.time.LocalDate

@RestController
class FinanceController @Autowired constructor(
    private val financeService: FinanceService
) {

    @GetMapping("/balance")
    fun getBalance(@RequestParam startDate: LocalDate, @RequestParam endDate: LocalDate): ResponseEntity<Double> {
        return try {
            val balance = financeService.calculateBalance(startDate, endDate)
            ResponseEntity.ok(balance)
        }catch (e: Exception) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(-1.0)
        }
    }
    @GetMapping("/expense-summary")
    fun getExpenseSummary(@RequestParam startDate: LocalDate, @RequestParam endDate: LocalDate): ResponseEntity<List<ExpenseSummaryDTO>> {
        return try {
            val expenseSummary = financeService.getExpenseSummaryByCategory(startDate, endDate)
            ResponseEntity.ok(expenseSummary)
        }catch (e: Exception) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(emptyList())
        }
    }
}