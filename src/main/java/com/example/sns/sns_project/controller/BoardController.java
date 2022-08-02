package com.example.sns.sns_project.controller;

import com.example.sns.sns_project.domain.BoardRequestDto;
import com.example.sns.sns_project.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RestController
public class BoardController {
    @Autowired
    private BoardService boardService;

    @PostMapping("/upload")
    public void createBoard(
            @RequestParam(name="user_id")String user_id, @RequestParam(name="img_url")String img_url,
            @RequestParam(name="delete_url")String delete_url, @RequestParam(name="contents")String contents,
            @RequestParam(name="public_scope")int public_scope, HttpServletResponse response, HttpServletRequest request
    ) {
        System.out.println("img_url : " + img_url);
        BoardRequestDto b_dto = new BoardRequestDto(user_id, img_url, contents,0, public_scope, delete_url);
        boardService.createBoard(b_dto);

        String url = "/main";
        try{
            response.sendRedirect(url);
        }catch (Exception e){
            e.printStackTrace();
        }
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
