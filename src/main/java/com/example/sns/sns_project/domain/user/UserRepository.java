package com.example.sns.sns_project.domain.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<UserVO , String> {



    @Query(value = "select * from users where user_id =?1 and user_pw =?2", nativeQuery = true)
    public UserVO logCheck(String id, String pw);

}
