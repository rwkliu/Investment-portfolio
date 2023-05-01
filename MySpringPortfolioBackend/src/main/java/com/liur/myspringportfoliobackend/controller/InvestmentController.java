package com.liur.myspringportfoliobackend.controller;

import com.liur.myspringportfoliobackend.model.IdList;
import com.liur.myspringportfoliobackend.model.Investment;
import com.liur.myspringportfoliobackend.service.InvestmentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(originPatterns = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class InvestmentController {
  private final InvestmentService investmentService;

  // Constructor-based dependency injection
  public InvestmentController(InvestmentService investmentService) {
    this.investmentService = investmentService;
  }

  // Add investment
  @PostMapping("/investments")
  public Investment createInvestment(@RequestBody Investment newInvestment) {
    investmentService.createInvestment(newInvestment);
    return newInvestment;
  }

  // Get investments
  @GetMapping("/investments")
  public List<Investment> getAllInvestments() {
    return investmentService.getAllInvestments();
  }

  // Update investment
  @RequestMapping(
    value = "/investments/{investmentId}",
    produces = "application/json",
    method = {RequestMethod.PUT}
  )
  public ResponseEntity<Investment> updateInvestment(@PathVariable Long investmentId, @RequestBody Investment newInvestmentDetails) {
    newInvestmentDetails = investmentService.updateInvestment(investmentId, newInvestmentDetails);
    return ResponseEntity.ok(newInvestmentDetails);
  }

  // Delete investments
  @DeleteMapping("/delete-investments")
  public ResponseEntity<Map<String, Boolean>> deleteInvestments(@RequestBody IdList idList) {
    boolean deleted = investmentService.deleteInvestments(idList.getIdList());
    Map<String, Boolean> response = new HashMap<>();
    response.put("deleted", deleted);
    return ResponseEntity.ok(response);
  }
}
