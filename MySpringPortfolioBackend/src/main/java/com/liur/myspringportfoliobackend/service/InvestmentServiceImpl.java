package com.liur.myspringportfoliobackend.service;

import com.liur.myspringportfoliobackend.entity.InvestmentEntity;
import com.liur.myspringportfoliobackend.exception.ResourceNotFoundException;
import com.liur.myspringportfoliobackend.model.Investment;
import com.liur.myspringportfoliobackend.repository.InvestmentRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class InvestmentServiceImpl implements InvestmentService {
  private InvestmentRepository investmentRepository;

  // Constructor-based dependency injection
  public InvestmentServiceImpl(InvestmentRepository investmentRepository) {
    this.investmentRepository = investmentRepository;
  }

  @Override
  public Investment createInvestment(Investment investment) {
    InvestmentEntity investmentEntity = new InvestmentEntity();
    BeanUtils.copyProperties(investment, investmentEntity);
    investmentRepository.save(investmentEntity);
    return investment;
  }

  @Override
  public List<Investment> getAllInvestments() {
    List<InvestmentEntity> investmentEntities = investmentRepository.findAll();
    List<Investment> investments = investmentEntities
        .stream()
        .map(investmentEntity -> new Investment(
            investmentEntity.getInvestmentId(),
            investmentEntity.getInvestmentName(),
            investmentEntity.getInvestmentType(),
            investmentEntity.getFundsInvested(),
            investmentEntity.getDateInvested(),
            investmentEntity.getDescription()
        ))
        .collect(Collectors.toList());
    return investments;
  }

  @Override
  public Investment updateInvestment(Long investmentId, Investment investment) {
    InvestmentEntity investmentEntity = investmentRepository.findById(investmentId)
        .orElseThrow(() -> new ResourceNotFoundException("Investment record does not exist with this id: " + investmentId));

    investmentEntity.setInvestmentName(investment.getInvestmentName());
    investmentEntity.setInvestmentType(investment.getInvestmentType());
    investmentEntity.setFundsInvested(investment.getFundsInvested());
    investmentEntity.setDateInvested(investment.getDateInvested());
    investmentEntity.setDescription(investment.getDescription());

    investmentRepository.save(investmentEntity);
    return investment;
  }


  @Override
  public boolean deleteInvestment(Long investmentId) {
    InvestmentEntity investmentEntity = investmentRepository.findById(investmentId)
        .orElseThrow(() -> new ResourceNotFoundException("Investment record does not exist with this id: " + investmentId));
    investmentRepository.delete(investmentEntity);
    return true;
  }
}
