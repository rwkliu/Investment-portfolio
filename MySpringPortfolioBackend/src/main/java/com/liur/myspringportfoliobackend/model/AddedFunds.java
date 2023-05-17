package com.liur.myspringportfoliobackend.model;

public class AddedFunds {
  private long addFundId;
  private long fundId;
  private long addFundAmount;

  public AddedFunds() {
  }

  public AddedFunds(long addFundId, long fundId, long addFundAmount) {
    this.addFundId = addFundId;
    this.fundId = fundId;
    this.addFundAmount = addFundAmount;
  }

  public long getAddFundId() {
    return addFundId;
  }

  public void setAddFundId(long addFundId) {
    this.addFundId = addFundId;
  }

  public long getFundId() {
    return fundId;
  }

  public void setFundId(long fundId) {
    this.fundId = fundId;
  }

  public long getAddFundAmount() {
    return addFundAmount;
  }

  public void setAddFundAmount(long addFundAmount) {
    this.addFundAmount = addFundAmount;
  }
}
