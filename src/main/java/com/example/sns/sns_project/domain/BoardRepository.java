package com.example.sns.sns_project.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BoardRepository extends JpaRepository<BoardVO, Integer> {

     @Query(value = "select * from boards where public_scope = ?1 order by  created_at DESC ", nativeQuery = true)
     List<BoardVO> findBoardsByPublicScopeOrderByCreatedAtDesc(int public_scope);

     @Query(value = "select * from boards where user_id = ?1", nativeQuery = true)
     List<BoardVO> findBoardsByUserId(String user_id);

}
