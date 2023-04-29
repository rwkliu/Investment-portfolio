package com.liur.myspringportfoliobackend.repository;

import com.liur.myspringportfoliobackend.entity.FundEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FundRepository extends JpaRepository<FundEntity, Long> {
}
