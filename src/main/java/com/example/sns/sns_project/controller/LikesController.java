package com.example.sns.sns_project.controller;

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

    @GetMapping("/likesSearch")
    public boolean search(@RequestParam(name = "userid") int userid, @RequestParam(name = "log") int log){
        return likesService.search(userid,log);
    }

    @GetMapping("/dibsSearch")
    public boolean dibsSearch(@RequestParam(name = "boardid") int boardid, @RequestParam(name = "log") int log){

        boolean check = likesService.dibsSearch(boardid,log);

//        false가 떠야
//        //
//        if(check){
//
//        }
//        else{
//
//        }
        return check;
    }
}
