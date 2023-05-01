package com.liur.myspringportfoliobackend.service;

import com.liur.myspringportfoliobackend.model.Investment;

import java.util.List;

public interface InvestmentService {
  Investment createInvestment(Investment investment);

  List<Investment> getAllInvestments();

  Investment updateInvestment(Long investmentId, Investment investment);

  boolean deleteInvestments(List<Long> ids);
}
