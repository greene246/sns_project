package com.example.sns.sns_project.controller;

import com.example.sns.sns_project.domain.BoardRequestDto;
import com.example.sns.sns_project.domain.BoardVO;
import com.example.sns.sns_project.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import com.example.sns.sns_project.domain.BoardRepository;

import java.util.List;

@RequiredArgsConstructor
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
        BoardRequestDto b_dto = new BoardRequestDto(user_id, img_url, contents,0, public_scope, delete_url);
        boardService.createBoard(b_dto);



        String url = "/main";
        try{
            request.getRequestDispatcher(url).forward(request,response);
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    public void findPublic_scope() {

//        List<BoardVO> list = repo.findBoardByPublic_scope(0);
//        for(int i = 0; i < list.size(); i++) {
//            System.out.println(list.get(i).getUser_id());
//        }
//        List<User> userList = userRepository.findAll();


        //repo.findBoardsByPublic_scope(0).forEach(board -> System.out.println(board.getUser_id()));


       // return  list;
    }

    @GetMapping("/search")
    public List<BoardVO> search(@RequestParam(name = "a") int a){
        return boardService.search(a);

    }

}
