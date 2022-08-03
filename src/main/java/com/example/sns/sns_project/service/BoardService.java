package com.example.sns.sns_project.service;

import com.example.sns.sns_project.domain.BoardRepository;
import com.example.sns.sns_project.domain.BoardRequestDto;
import com.example.sns.sns_project.domain.BoardVO;
import com.example.sns.sns_project.domain.UserVO;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Random;
import java.util.function.Function;

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














