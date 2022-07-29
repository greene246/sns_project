package com.example.sns.sns_project.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BoardRepository extends JpaRepository<BoardVO, String> {

//    public List<BoardVO> findBoardByTitle(int public_scope);
//
    public List<BoardVO> findBoardByPublic_scope(int public_scope);
}
