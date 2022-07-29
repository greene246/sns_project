package com.example.sns.sns_project.service;

import com.example.sns.sns_project.domain.user.BoardRepository;
import com.example.sns.sns_project.domain.user.BoardRequestDto;
import com.example.sns.sns_project.domain.user.BoardVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BoardService {
    @Autowired
    private BoardRepository boardRepository;

    // 1. Create
    public void createBoard(BoardRequestDto boardRequestDto){
        BoardVO board = new BoardVO(boardRequestDto);
        boardRepository.save(board);
    }
}
