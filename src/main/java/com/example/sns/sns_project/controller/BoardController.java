package com.example.sns.sns_project.controller;

import com.example.sns.sns_project.domain.BoardRequestDto;
import com.example.sns.sns_project.domain.BoardVO;
import com.example.sns.sns_project.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class BoardController {
    @Autowired
    private BoardService boardService;

    @PostMapping("/upload")
    @ResponseBody
    public void creatMultiBoard(@RequestBody BoardRequestDto boardRequestDto, HttpServletResponse response) throws ServletException, IOException {
        boardService.createBoard(boardRequestDto);

        response.sendRedirect("/main");
    }

    @DeleteMapping("/delete_board")
    @ResponseBody
    public void deleteBoard(@RequestBody BoardRequestDto boardRequestDto, HttpServletResponse response) throws ServletException, IOException {
        boardService.deleteBoard(boardRequestDto);

        String url = "/main";
        try {
//            request.getRequestDispatcher(url).forward(request,response);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @GetMapping("/search/{num}")
    public List<BoardVO> search(@PathVariable("num") int num) {
        return boardService.search(num);
    }


}