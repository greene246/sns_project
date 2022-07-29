package com.example.sns.sns_project.controller;

import com.example.sns.sns_project.domain.BoardRequestDto;
import com.example.sns.sns_project.domain.BoardVO;
import com.example.sns.sns_project.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import com.example.sns.sns_project.domain.BoardRepository;

import java.util.List;

@RestController
public class BoardController {
    @Autowired
    private BoardService boardService;
    @Autowired
    private BoardRepository repo;


    @PostMapping("/upload")
    public void createBoard(
            @RequestParam(name="user_id")String user_id, @RequestParam(name="img_url")String img_url,
            @RequestParam(name="delete_url")String delete_url, @RequestParam(name="contents")String contents,
            @RequestParam(name="public_scope")int public_scope, HttpServletResponse response, HttpServletRequest request
    ) {
        HttpSession session = request.getSession();
        BoardRequestDto b_dto = new BoardRequestDto(user_id, img_url, contents,0, public_scope, delete_url);
        boardService.createBoard(b_dto);



        String url = "/main";
        try{
            request.getRequestDispatcher(url).forward(request,response);
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    //@Test
//    @RequestMapping("/call")
    public List findBoardByPublic_scope() {

        List<BoardVO> list = repo.findBoardByPublic_scope(0);
        for(int i = 0; i < list.size(); i++) {
            System.out.println(list.get(i).getUser_id());
        }
        return  list;
    }

}
