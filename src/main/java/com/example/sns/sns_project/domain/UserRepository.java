package com.example.sns.sns_project.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserVO, String> {
    // JPA: java <-> Database 간의 자동 번역기 역할을 수행

}
