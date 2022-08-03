package com.example.sns.sns_project.controller;

import com.example.sns.sns_project.service.LikesService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class LikesController {

    private LikesService likesService;

    @GetMapping("/likesSearch/{userid}{log}")
    public boolean search(@PathVariable("userid") int userid,@PathVariable("log") int log){

        return likesService.search(userid,log);
    }

}
