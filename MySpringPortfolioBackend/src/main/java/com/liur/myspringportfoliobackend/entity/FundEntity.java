package com.liur.myspringportfoliobackend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "funds")
public class FundEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long fundId;

  @Column(name = "available_funds")
  private long funds;

  public FundEntity() {
  }

  public FundEntity(long fundId, long funds) {
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
