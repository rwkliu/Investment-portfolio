package com.liur.myspringportfoliobackend.service;

import com.liur.myspringportfoliobackend.model.Fund;

import java.util.List;

public interface FundService {
  Fund createFund(Fund fund);

  Fund getFund(Long fundId);

  List<Fund> getAllFunds();

  Fund updateFund(Long fundId, Fund fund);

  boolean deleteFund(Long fundId);
}
