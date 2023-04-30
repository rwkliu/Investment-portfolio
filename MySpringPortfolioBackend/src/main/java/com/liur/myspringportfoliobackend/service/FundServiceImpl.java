package com.liur.myspringportfoliobackend.service;

import com.liur.myspringportfoliobackend.entity.FundEntity;
import com.liur.myspringportfoliobackend.exception.ResourceNotFoundException;
import com.liur.myspringportfoliobackend.model.Fund;
import com.liur.myspringportfoliobackend.repository.FundRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class FundServiceImpl implements FundService {
  private FundRepository fundRepository;

  public FundServiceImpl(FundRepository fundRepository) {
    this.fundRepository = fundRepository;
  }

  @Override
  public Fund createFund(Fund fund) {
    FundEntity fundEntity = new FundEntity();
    BeanUtils.copyProperties(fund, fundEntity);
    fundRepository.save(fundEntity);
    return fund;
  }

  @Override
  public List<Fund> getAllFunds() {
    List<FundEntity> fundEntities = fundRepository.findAll();
    List<Fund> funds = fundEntities
        .stream()
        .map(fundEntity -> new Fund(
            fundEntity.getFundId(),
            fundEntity.getFunds()
        ))
        .collect(Collectors.toList());
    return funds;
  }

  @Override
  public Fund updateFund(Long fundId, Fund fund) {
    FundEntity fundEntity = fundRepository.findById(fundId)
        .orElseThrow(() -> new ResourceNotFoundException("Fund record does not exist with id: " + fundId));
    fundEntity.setFunds(fund.getFunds());
    fundRepository.save(fundEntity);
    return fund;
  }

  @Override
  public boolean deleteFund(Long fundId) {
    FundEntity fundEntity = fundRepository.findById(fundId)
        .orElseThrow(() -> new ResourceNotFoundException("Fund record does not exist with id: " + fundId));
    fundRepository.delete(fundEntity);
    return true;
  }
}
