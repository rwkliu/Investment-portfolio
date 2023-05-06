package com.liur.myspringportfoliobackend.model;

public class Investment {
  private long investmentId;
  private long fundId;
  private String investmentName;
  private String investmentType;
  private long fundsInvested;
  private String dateInvested;
  private String description;

  public Investment() {
  }

  public Investment(long investmentId, long fundId, String investmentName, String investmentType, long fundsInvested, String dateInvested, String description) {
    this.investmentId = investmentId;
    this.fundId = fundId;
    this.investmentName = investmentName;
    this.investmentType = investmentType;
    this.fundsInvested = fundsInvested;
    this.dateInvested = dateInvested;
    this.description = description;
  }

  public long getInvestmentId() {
    return investmentId;
  }

  public void setInvestmentId(long investmentId) {
    this.investmentId = investmentId;
  }

  public long getFundId() {
    return fundId;
  }

  public void setFundId(long fundId) {
    this.fundId = fundId;
  }

  public String getInvestmentName() {
    return investmentName;
  }

  public void setInvestmentName(String investmentName) {
    this.investmentName = investmentName;
  }

  public String getInvestmentType() {
    return investmentType;
  }

  public void setInvestmentType(String investmentType) {
    this.investmentType = investmentType;
  }

  public long getFundsInvested() {
    return fundsInvested;
  }

  public void setFundsInvested(long fundsInvested) {
    this.fundsInvested = fundsInvested;
  }

  public String getDateInvested() {
    return dateInvested;
  }

  public void setDateInvested(String dateInvested) {
    this.dateInvested = dateInvested;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }
}
