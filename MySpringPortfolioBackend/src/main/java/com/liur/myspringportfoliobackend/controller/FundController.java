package com.liur.myspringportfoliobackend.controller;

import com.liur.myspringportfoliobackend.model.Fund;
import com.liur.myspringportfoliobackend.service.FundService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(originPatterns = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class FundController {
  private final FundService fundService;

  public FundController(FundService fundService)  {
    this.fundService = fundService;
  }

  @GetMapping("/funds/{fundId}")
  public Fund getFund(@PathVariable Long fundId) {
    return fundService.getFund(fundId);
  }
}
