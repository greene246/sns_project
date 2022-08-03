package com.example.sns.sns_project.service;

import com.example.sns.sns_project.domain.BoardRepository;
import com.example.sns.sns_project.domain.BoardRequestDto;
import com.example.sns.sns_project.domain.BoardVO;
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

        for(int i = 0; i < boards.size(); i++) {
            System.out.print(boards.get(i).getId()+" ");
           System.out.println(boards.get(i).getUser_id());
        }
        System.out.println("=========================================");
        return boards;
    }


}














