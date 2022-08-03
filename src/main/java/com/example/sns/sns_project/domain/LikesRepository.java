package com.example.sns.sns_project.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;


public interface LikesRepository extends JpaRepository<LikesVo, Integer> {

    @Query(value = "select * from sns.likes where user_id=?1", nativeQuery = true)
    List<LikesVo> findLikesByUser_id(int user_id);
}
