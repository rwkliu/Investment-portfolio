package com.liur.myspringportfoliobackend.repository;

import com.liur.myspringportfoliobackend.entity.AddedFundsEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddedFundsRepository extends JpaRepository<AddedFundsEntity, Long> {
}
