package com.example.sns.sns_project.domain.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<UserVO , String> {



    @Query(value = "select * from users where UserId =?1 and UserPw =?2", nativeQuery = true)
    public List<UserVO> logCheck(String id, String pw);

}
