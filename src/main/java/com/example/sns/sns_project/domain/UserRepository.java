package com.example.sns.sns_project.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserVO , String> {
    @Query(value = "select thumbnail from sns.users where user_id=?1", nativeQuery = true)
    public String findThumbnailById(String id);
}
