package com.example.financetracker.controller

import com.example.financetracker.entity.ExpenseEntry
import com.example.financetracker.service.ExpenseEntryService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/expense-entries")
class ExpenseEntryController(private val expenseEntryService: ExpenseEntryService) {
    @GetMapping
    fun getAllExpenseEntries(): List<ExpenseEntry> = expenseEntryService.getAllExpenseEntries()

    @GetMapping("/{id}")
    fun getExpenseEntryById(@PathVariable id: Long): ResponseEntity<ExpenseEntry> {
        val expenseEntry = expenseEntryService.getExpenseEntryById(id)
        return if (expenseEntry.isPresent) {
            ResponseEntity.ok(expenseEntry.get())
        } else {
            ResponseEntity.notFound().build()
        }
    }

    @PostMapping
    fun createExpenseEntry(@RequestBody expenseEntry: ExpenseEntry): ResponseEntity<ExpenseEntry> {
        val createdExpenseEntry = expenseEntryService.createExpenseEntry(expenseEntry)
        return ResponseEntity.status(HttpStatus.CREATED).body(createdExpenseEntry)
    }

    @PutMapping("/{id}")
    fun updateExpenseEntry(
        @PathVariable id: Long,
        @RequestBody updatedExpenseEntry: ExpenseEntry
    ): ResponseEntity<ExpenseEntry> {
        val updatedExpenseEntry = expenseEntryService.updateExpenseEntry(id, updatedExpenseEntry)
        return ResponseEntity.ok(updatedExpenseEntry)
    }
    @DeleteMapping("/{id}")
    fun deleteExpenseEntry(@PathVariable id: Long): ResponseEntity<Unit> {
        expenseEntryService.deleteExpenseEntry(id)
        return ResponseEntity.noContent().build()
    }
}