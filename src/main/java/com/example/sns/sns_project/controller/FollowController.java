package com.example.sns.sns_project.controller;


import com.example.sns.sns_project.domain.FollowRequestDto;
import com.example.sns.sns_project.domain.FollowVO;
import com.example.sns.sns_project.service.FollowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;

@RestController
public class FollowController {

    @Autowired
    private FollowService followService;

    @PostMapping("/following")
    @ResponseBody
    public void following(@RequestBody FollowRequestDto followRequestDto){


        int id = followService.findId(followRequestDto.getFollower_id(), followRequestDto.getFollowing_id());

        if (id == -1)
            followService.add(followRequestDto.getFollower_id(), followRequestDto.getFollowing_id());
    }
    @PostMapping("/unFollowing")
    @ResponseBody
    public void unFollowing(@RequestBody FollowRequestDto followRequestDto){

        int id = followService.findId(followRequestDto.getFollower_id(),followRequestDto.getFollowing_id());

        if (id != -1)
            followService.remove(id);

    }

    @PostMapping("/followCheck")
    @ResponseBody
    public boolean followCheck(@RequestBody FollowRequestDto followRequestDto){

        boolean check = followService.followCheck(followRequestDto.getFollower_id(),followRequestDto.getFollowing_id());
        if (check)

            return true;
        else
            return false;
    }

    @PostMapping("/followCount")
    @ResponseBody
    public HashMap<String, List<FollowVO>> followCount(@RequestBody FollowRequestDto followRequestDto){
        HashMap<String, List<FollowVO>> follows = followService.followCount(followRequestDto.getFollower_id());

        return follows;
    }

    @PostMapping("/myFollowCount")
    @ResponseBody
    public HashMap<String, List<FollowVO>> myFollowCount(@RequestBody FollowRequestDto followRequestDto){
        HashMap<String, List<FollowVO>> follows = followService.myFollowCount(followRequestDto.getFollower_id());

        return follows;
    }
}