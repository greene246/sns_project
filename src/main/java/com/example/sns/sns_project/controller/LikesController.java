package com.example.sns.sns_project.controller;

import com.example.sns.sns_project.domain.LikesRequestDto;
import com.example.sns.sns_project.service.BoardService;
import com.example.sns.sns_project.service.LikesService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class LikesController {
    @Autowired
    private LikesService likesService;

    @Autowired
    public BoardService boardService;

    //해당 테이블 찜 확인 출력
    @GetMapping("/likesSearch")
    public boolean search(@RequestParam(name = "userid") int userid, @RequestParam(name = "log") int log){
        return likesService.search(userid,log);
    }

    //찜 DB에 넣고 출력
    @GetMapping("/dibsSearch")
    public boolean dibsSearch(@RequestParam(name = "boardid") int boardid, @RequestParam(name = "log") int log){

        boolean check = likesService.dibsSearch(boardid,log);
        LikesRequestDto likesRequestDto = new LikesRequestDto(log,boardid);

        // false 일때 db에 값을 넣고
        // true 일때 db에 값을 삭제한다.
        if(check){
            boardService.DownLikeCount(boardid);
            likesService.deleteHeart(likesRequestDto);
        }
        else{
            likesService.addHeart(likesRequestDto);
            boardService.UpLikeCount(boardid);
        }
        return check;
    }
}
