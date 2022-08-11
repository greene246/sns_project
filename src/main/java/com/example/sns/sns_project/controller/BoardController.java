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

    @GetMapping("/search/{num}/{section_cnt}")
    public List<BoardVO> search(@PathVariable("num") int num, @PathVariable("section_cnt") int section_cnt) {
        // num 부터 section_cnt 개수 만큼
        List<BoardVO> result =  boardService.search(num, section_cnt);
        System.out.println("size :" + result.size());
        return result;
    }

    // 유저 아이디 받아서 그 유저가 쓴 게시물 죄다 가져오기
    @PostMapping("/myContent/{user_id}")
    public List<BoardVO> myContent(@PathVariable("user_id") String user_id){
        return boardService.myContent(user_id);
    }

    // 본인 게시물 지우기
    @PostMapping("/deleteMyContent/{id}")
    public void deleteMyContent(@PathVariable("id") int id){

        boardService.deleteMyContent(id);
    }
    // log 값으로 게시물 개수 가져오기
    @PostMapping("/myCommentCount/{log}")
    public int myCommentCount(@PathVariable("log") int log){
        return boardService.myCommentCount(log);
    }

    //유저의 아이디로 게시물 개수 가져오기
    @PostMapping("/CommentCount/{user_id}")
    public int CommentCount(@PathVariable("user_id") String user_id){
        return boardService.CommentCount(user_id);
    }

    @PostMapping("/count_boards")
    public int count_boards(){
        return boardService.Count_board();
    }

}