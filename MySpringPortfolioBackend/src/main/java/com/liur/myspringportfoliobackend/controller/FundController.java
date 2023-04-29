package com.liur.myspringportfoliobackend.controller;

import com.liur.myspringportfoliobackend.entity.FundEntity;
import com.liur.myspringportfoliobackend.exception.ResourceNotFoundException;
import com.liur.myspringportfoliobackend.repository.FundRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(originPatterns = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class FundController {
  private final FundRepository fundRepository;

  // Constructor-based dependency injection
  public FundController(FundRepository fundRepository) {
    this.fundRepository = fundRepository;
  }

  // Get available funds
  @GetMapping("/funds")
  public List<FundEntity> getAllFunds() {
    return fundRepository.findAll();
  }

  // Add funds record
  @PostMapping("/funds")
  public FundEntity createFund(@RequestBody FundEntity fund) {
    return fundRepository.save(fund);
  }

  // Update fund
//  @PutMapping("/funds/{fundId}")
  @RequestMapping(
    value = "/funds/{fundId}",
    produces = "application/json",
    method = {RequestMethod.PUT}
  )
  public ResponseEntity<FundEntity> updateFund(@PathVariable Long fundId, @RequestBody FundEntity newFundAmount) {
    FundEntity fundEntity = fundRepository.findById(fundId)
      .orElseThrow(() -> new ResourceNotFoundException("Fund record does not exist with id: " + fundId));

    fundEntity.setFunds(newFundAmount.getFunds());
    FundEntity updatedFunds = fundRepository.save(fundEntity);
    return ResponseEntity.ok(updatedFunds);
  }

  // Delete fund
  @DeleteMapping("/funds/{fundId}")
  public ResponseEntity<Map<String, Boolean>> deleteFund(@PathVariable Long fundId) {
    FundEntity fund = fundRepository.findById(fundId)
        .orElseThrow(() -> new ResourceNotFoundException("Fund record does not exist with id: " + fundId));
    fundRepository.delete(fund);
    Map<String, Boolean> response = new HashMap<>();
    response.put("deleted", Boolean.TRUE);
    return ResponseEntity.ok(response);
  }
}
