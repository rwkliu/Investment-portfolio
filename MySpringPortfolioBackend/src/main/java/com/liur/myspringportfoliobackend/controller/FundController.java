package com.liur.myspringportfoliobackend.controller;

import com.liur.myspringportfoliobackend.model.Fund;
import com.liur.myspringportfoliobackend.service.FundService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(originPatterns = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class FundController {
  private final FundService fundService;

  public FundController(FundService fundService)  {
    this.fundService = fundService;
  }

  // Add funds record
  @PostMapping("/funds")
  public Fund createFund(@RequestBody Fund fund) {
    return fundService.createFund(fund);
  }

  @GetMapping("/get-fund/{fundId}")
  public Fund getFund(@PathVariable Long fundId) {
    return fundService.getFund(fundId);
  }

  // Get available funds
  @GetMapping("/funds")
  public List<Fund> getAllFunds() {
    return fundService.getAllFunds();
  }

  // Update fund
  @RequestMapping(
    value = "/funds/{fundId}",
    produces = "application/json",
    method = {RequestMethod.PUT}
  )
  public ResponseEntity<Fund> updateFund(@PathVariable Long fundId, @RequestBody Fund newFundAmount) {
    newFundAmount = fundService.updateFund(fundId, newFundAmount);
    return ResponseEntity.ok(newFundAmount);
  }

  // Delete fund
  @DeleteMapping("/funds/{fundId}")
  public ResponseEntity<Map<String, Boolean>> deleteFund(@PathVariable Long fundId) {
    boolean deleted = false;
    deleted = fundService.deleteFund(fundId);
    Map<String, Boolean> response = new HashMap<>();
    response.put("deleted", deleted);
    return ResponseEntity.ok(response);
  }
}
