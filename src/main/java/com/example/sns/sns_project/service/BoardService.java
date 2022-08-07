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

    // 컨텐츠 DB 탐색
    public List<BoardVO> search(int a){
        List<BoardVO> boards = boardRepository.findBoardsByPublicScopeOrderByCreatedAtDesc(a);
        return boards;
    }

    @Transactional
    //like count ++
    public void UpLikeCount(int boardid){
        List<BoardVO> boards = boardRepository.findBoardsById(boardid);
        List<BoardVO> users = boardRepository.findAll();

        int like = boards.get(0).getLike_cnt()+1;
        BoardRequestDto boardRequestDto = new BoardRequestDto(boards.get(0).getUser_id(),like);

        for(int i = 0; i < users.size(); i++){
            if(boards.get(0).getId() == users.get(i).getId()){
                users.get(i).update(boardRequestDto);
            }
        }
    }

    //like count --
    public void DownLikeCount(int boardid){
        List<BoardVO> boards = boardRepository.findBoardsById(boardid);
        List<BoardVO> users = boardRepository.findAll();
        int like = boards.get(0).getLike_cnt()-1;

        BoardRequestDto boardRequestDto = new BoardRequestDto(boards.get(0).getUser_id(),like);

        for(int i = 0; i < users.size(); i++){
            if(boards.get(0).getId() == users.get(i).getId()){
                users.get(i).update(boardRequestDto);
            }
        }
    }

    // 나의 게시물 가져오기
    public List<BoardVO> myContent(String user_id){
        List<BoardVO> boards = boardRepository.findBoardsByUserId(user_id);

        return boards;
    }
}












