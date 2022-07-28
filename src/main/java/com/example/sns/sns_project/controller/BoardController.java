package com.example.sns.sns_project.controller;

import com.example.sns.sns_project.domain.user.BoardRequestDto;
import com.example.sns.sns_project.domain.user.BoardVO;
import com.example.sns.sns_project.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
@Controller
public class BoardController {
    @Autowired
    private BoardService boardService;

    @RequestMapping("/write")
    public BoardVO write(@RequestBody BoardRequestDto boardRequestDto) {
        System.out.println(boardRequestDto.getUserId());
        System.out.println(boardRequestDto.getContents());
        System.out.println(boardRequestDto.getImg());

        BoardVO board = boardService.createBoard(boardRequestDto);

        return new BoardVO();
    }


}