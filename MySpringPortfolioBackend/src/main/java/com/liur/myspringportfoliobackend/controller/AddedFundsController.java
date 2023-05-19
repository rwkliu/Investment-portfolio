package com.liur.myspringportfoliobackend.controller;

import com.liur.myspringportfoliobackend.model.AddedFunds;
import com.liur.myspringportfoliobackend.service.AddedFundsService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(originPatterns = "http://localhost:8080")
@RestController
@RequestMapping("/api/v1")
public class AddedFundsController {
  private final AddedFundsService addedFundsService;

  public AddedFundsController(AddedFundsService addedFundsService) {
    this.addedFundsService = addedFundsService;
  }

  //Add added funds record
  @PostMapping("/addedFunds")
  public AddedFunds createAddedFunds(@RequestBody AddedFunds addedFunds) {
    return addedFundsService.createAddedFunds(addedFunds);
  }
}
