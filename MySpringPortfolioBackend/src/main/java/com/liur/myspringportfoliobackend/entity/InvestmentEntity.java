package com.liur.myspringportfoliobackend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "investments")
public class InvestmentEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long investmentId;

  @Column(name = "fund_id")
  private long fundId;

  @Column(name = "investment_name")
  private String investmentName;

  @Column(name = "investment_type")
  private String investmentType;

  @Column(name = "funds_invested")
  private long fundsInvested;

  @Column(name = "date_invested")
  private String dateInvested;

  @Column(name = "description")
  private String description;

  public InvestmentEntity() {
  }

  public InvestmentEntity(long investmentId, long fundId, String investmentName, String investmentType, long fundsInvested, String dateInvested, String description) {
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
