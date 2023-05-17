package com.liur.myspringportfoliobackend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "added_funds")
public class AddedFundsEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long addFundId;

  @Column(name = "fund_id")
  private long fundId;

  @Column(name = "add_fund_amount")
  private long addFundAmount;

  public AddedFundsEntity() {
  }

  public AddedFundsEntity(long addFundId, long fundId, long addFundAmount) {
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
