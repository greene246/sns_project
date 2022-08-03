package com.example.sns.sns_project.controller;

import com.example.sns.sns_project.domain.BoardRequestDto;
import com.example.sns.sns_project.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;

@RestController
public class BoardController {
    @Autowired
    private BoardService boardService;

    @PostMapping("/upload")
    @ResponseBody
    public void creatMultiBoard(@RequestBody BoardRequestDto boardRequestDto, HttpServletResponse response) throws ServletException, IOException {
        boardService.createBoard(boardRequestDto);
    }

//    @DeleteMapping("/delete")
//    public void deleteBoard(@RequestParam(name="user_id")String user_id, @RequestParam(name="img_url")String img_url){
//        System.out.println(user_id);
//        System.out.println(img_url);
//        BoardRequestDto b_dto = new BoardRequestDto(user_id, img_url);
//        boardService.deleteBoard(b_dto);
//    }

    @PostMapping("/delete")
    public void deleteBoard(@RequestParam(name="id")int id){
        System.out.println(id);
        boardService.deleteBoard(id);
    }


}
