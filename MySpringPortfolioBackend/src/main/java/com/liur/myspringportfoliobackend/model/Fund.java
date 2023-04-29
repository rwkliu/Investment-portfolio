package com.liur.myspringportfoliobackend.model;

public class Fund {
  private long fundId;
  private long funds;

  public Fund() {
  }

  public Fund(long fundId, long funds) {
    this.fundId = fundId;
    this.funds = funds;
  }

  public long getFundId() {
    return fundId;
  }

  public void setFundId(long fundId) {
    this.fundId = fundId;
  }

  public long getFunds() {
    return funds;
  }

  public void setFunds(long funds) {
    this.funds = funds;
  }
}
