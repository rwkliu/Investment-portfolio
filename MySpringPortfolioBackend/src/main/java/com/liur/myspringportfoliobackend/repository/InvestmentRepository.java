package com.liur.myspringportfoliobackend.repository;

import com.liur.myspringportfoliobackend.entity.InvestmentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InvestmentRepository extends JpaRepository<InvestmentEntity, Long> {
}
