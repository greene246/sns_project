package com.example.sns.sns_project.Service;

import com.example.sns.sns_project.domain.BoardRepository;

import com.example.sns.sns_project.domain.BoardRequestDto;
import com.example.sns.sns_project.domain.BoardVO;
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
