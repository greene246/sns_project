package com.example.sns.sns_project.controller;

import com.example.sns.sns_project.domain.BoardRequestDto;
import com.example.sns.sns_project.domain.BoardVO;
import com.example.sns.sns_project.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

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
        HttpSession session = request.getSession();
        user_id = (String) session.getAttribute("user_id");

        System.out.println("img_url : " + img_url);

        BoardRequestDto b_dto = new BoardRequestDto(user_id, img_url, contents,0, public_scope, delete_url);

        boardService.createBoard(b_dto);

        String url = "/main";
        try{
            request.getRequestDispatcher(url).forward(request,response);
        }catch (Exception e){
            e.printStackTrace();
        }
    }

}
