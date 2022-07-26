package com.example.sns.sns_project.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<UserVO , Integer> {

    @Query(value = "select * from users where 'name' =?1 and email =?2", nativeQuery = true)
    public UserVO findId(String name, String email);

    @Query(value = "select thumbnail from sns.users where user_id=?1", nativeQuery = true)
    public String findThumbnailById(String id);

}
