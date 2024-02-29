package com.example.adp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.adp.Model.Photography;

@Repository
public interface PhotographyRepository extends JpaRepository<Photography, Long> {
}
