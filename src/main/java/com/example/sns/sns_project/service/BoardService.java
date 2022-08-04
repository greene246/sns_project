package com.example.sns.sns_project.service;

import com.example.sns.sns_project.domain.*;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@RequiredArgsConstructor
@Service
public class BoardService {
    @Autowired
    private BoardRepository boardRepository;

    // 1. Create
    public void createBoard(BoardRequestDto boardRequestDto){
        BoardVO board = new BoardVO(boardRequestDto);
        boardRepository.save(board);
    }

    @Transactional
    public void deleteBoard(BoardRequestDto boardRequestDto){
        int del_id = boardRequestDto.getId();
        boardRepository.deleteById(del_id);
    }


    // 컨텐츠 DB 탐색색
//   public void search(int a){
    public List<BoardVO> search(int a){
        List<BoardVO> boards = boardRepository.findBoardsByPublicScopeOrderByCreatedAtDesc(a);

        return boards;
    }

    // 나의 게시물 가져오기
    public List<BoardVO> myContent(String user_id){
        List<BoardVO> boards = boardRepository.findBoardsByUserId(user_id);

        return boards;
    }

}













