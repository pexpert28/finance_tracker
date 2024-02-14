package com.example.financetracker.controller

import com.example.financetracker.entity.IncomeEntry
import com.example.financetracker.service.IncomeEntryService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/income-entries")
class IncomeEntryController(private val incomeEntryService: IncomeEntryService) {
    @GetMapping
    fun getAllIncomeEntries(): List<IncomeEntry> = incomeEntryService.getAllIncomeEntries()

    @GetMapping("/{id}")
    fun getIncomeEntryById(@PathVariable id: Long): ResponseEntity<IncomeEntry> {
        val incomeEntry = incomeEntryService.getIncomeEntryById(id)
        return if (incomeEntry.isPresent) {
            ResponseEntity.ok(incomeEntry.get())
        } else {
            ResponseEntity.notFound().build()
        }
    }

    @PostMapping
    fun createIncomeEntry(@RequestBody incomeEntry: IncomeEntry): ResponseEntity<IncomeEntry> {
        val createdIncomeEntry = incomeEntryService.createIncomeEntry(incomeEntry)
        return ResponseEntity.status(HttpStatus.CREATED).body(createdIncomeEntry)
    }

    @PutMapping("/{id}")
    fun updateIncomeEntry(@PathVariable id: Long, @RequestBody updatedIncomeEntry: IncomeEntry): ResponseEntity<IncomeEntry> {
        val updatedIncomeEntry = incomeEntryService.updateIncomeEntry(id, updatedIncomeEntry)
        return ResponseEntity.ok(updatedIncomeEntry)
    }

    @DeleteMapping("/{id}")
    fun deleteIncomeEntry(@PathVariable id: Long): ResponseEntity<Unit> {
        incomeEntryService.deleteIncomeEntry(id)
        return ResponseEntity.noContent().build()
    }
}