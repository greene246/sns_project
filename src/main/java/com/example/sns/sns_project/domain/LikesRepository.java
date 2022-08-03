package com.example.sns.sns_project.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;


public interface LikesRepository extends JpaRepository<LikesVo, Integer> {

    @Query(value = "select * from sns.likes where user_id=?1", nativeQuery = true)
    List<LikesVo> findLikesByUserId(int user_id);

    @Query(value = "select * from sns.likes where board_id = ?1", nativeQuery = true)
    List<LikesVo> findLikesByBoardId(int board_id);
}
