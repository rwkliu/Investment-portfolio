package com.liur.myspringportfoliobackend.controller;

import com.liur.myspringportfoliobackend.entity.InvestmentEntity;
import com.liur.myspringportfoliobackend.exception.ResourceNotFoundException;
import com.liur.myspringportfoliobackend.repository.InvestmentRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(originPatterns = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class InvestmentController {
  private final InvestmentRepository investmentRepository;

  // Constructor-based dependency injection
  public InvestmentController(InvestmentRepository investmentRepository) {
    this.investmentRepository = investmentRepository;
  }

  // Get investments
  @GetMapping("/investments")
  public List<InvestmentEntity> getAllInvestments() { return investmentRepository.findAll(); }

  // Add investment
  @PostMapping("/investments")
  public InvestmentEntity createInvestment(@RequestBody InvestmentEntity newInvestment) {
    return investmentRepository.save(newInvestment);
  }

  // Update investment
  @RequestMapping(
    value = "/investments/{investmentId}",
    produces = "application/json",
    method = {RequestMethod.PUT}
  )
  public ResponseEntity<InvestmentEntity> updateInvestment(@PathVariable Long investmentId, @RequestBody InvestmentEntity newInvestmentDetails) {
    InvestmentEntity investmentEntity = investmentRepository.findById(investmentId)
      .orElseThrow(() -> new ResourceNotFoundException("Investment record does not exist with this id: " + investmentId));

    investmentEntity.setInvestmentName(newInvestmentDetails.getInvestmentName());
    investmentEntity.setInvestmentType(newInvestmentDetails.getInvestmentType());
    investmentEntity.setFundsInvested(newInvestmentDetails.getFundsInvested());
    investmentEntity.setDateInvested(newInvestmentDetails.getDateInvested());
    investmentEntity.setDescription(newInvestmentDetails.getDescription());

    InvestmentEntity updatedInvestment = investmentRepository.save(investmentEntity);
    return ResponseEntity.ok(updatedInvestment);
  }

  // Delete investment
  @DeleteMapping("/investments/{investmentId}")
  public ResponseEntity<Map<String, Boolean>> deleteInvestment(@PathVariable Long investmentId) {
    InvestmentEntity investmentEntity = investmentRepository.findById(investmentId)
      .orElseThrow(() -> new ResourceNotFoundException("Investment record does not exist with this id: " + investmentId));
    investmentRepository.delete(investmentEntity);
    Map<String, Boolean> response = new HashMap<>();
    response.put("deleted", Boolean.TRUE);
    return ResponseEntity.ok(response);
  }
}
