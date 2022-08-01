package com.example.sns.sns_project.domain;

import org.springframework.data.annotation.QueryAnnotation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.sns.sns_project.domain.BoardVO;

import java.util.List;

@Repository
public interface BoardRepository extends JpaRepository<BoardVO, String> {

//    public List<BoardVO> findBoardByTitle(int public_scope);

     @Query(value = "select * from boards where public_scope = ?1", nativeQuery = true)
     List<BoardVO> findBoardsByPublicScope(int public_scope);
}
