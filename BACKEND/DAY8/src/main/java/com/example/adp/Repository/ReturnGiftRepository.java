package com.example.adp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.adp.Model.Returngift;

@Repository
public interface ReturnGiftRepository extends JpaRepository<Returngift, Long> {
}
