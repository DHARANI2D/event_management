package com.example.adp.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.adp.Model.User;

@Repository
public interface UserRepository extends JpaRepository <User, Integer> {
}
