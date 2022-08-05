package com.example.sns.sns_project.controller;


import com.example.sns.sns_project.domain.FollowRequestDto;
import com.example.sns.sns_project.service.FollowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FollowController {

    @Autowired
    private FollowService followService;

    @PostMapping("/following")
    @ResponseBody
    public void following(@RequestBody FollowRequestDto followRequestDto){
        System.out.println(followRequestDto.getFollower_id());
        System.out.println(followRequestDto.getFollowing_id());

        int id = followService.findId(followRequestDto.getFollower_id(), followRequestDto.getFollowing_id());

        if (id == -1)
            followService.add(followRequestDto.getFollower_id(), followRequestDto.getFollowing_id());
    }
    @PostMapping("/unFollowing")
    @ResponseBody
    public void unFollowing(@RequestBody FollowRequestDto followRequestDto){

        int id = followService.findId(followRequestDto.getFollower_id(),followRequestDto.getFollowing_id());
        System.out.println(id);

        if (id != -1)
            followService.remove(id);

    }
}
