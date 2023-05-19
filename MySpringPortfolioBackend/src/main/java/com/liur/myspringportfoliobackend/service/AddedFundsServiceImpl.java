package com.liur.myspringportfoliobackend.service;

import com.liur.myspringportfoliobackend.entity.AddedFundsEntity;
import com.liur.myspringportfoliobackend.model.AddedFunds;
import com.liur.myspringportfoliobackend.repository.AddedFundsRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

@Service
public class AddedFundsServiceImpl implements AddedFundsService {
  private final AddedFundsRepository addedFundsRepository;

  public AddedFundsServiceImpl(AddedFundsRepository addedFUndsRepository) {
    this.addedFundsRepository = addedFUndsRepository;
  }

  @Override
  public AddedFunds createAddedFunds(AddedFunds addedFunds) {
    AddedFundsEntity addedFundsEntity = new AddedFundsEntity();
    BeanUtils.copyProperties(addedFunds, addedFundsEntity);
    addedFundsRepository.save(addedFundsEntity);
    return addedFunds;
  }
}
