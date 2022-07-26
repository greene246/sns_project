package com.example.sns.sns_project.controller;

import com.example.sns.sns_project.Service.UserService;
import com.example.sns.sns_project.domain.user.UserRequestDto;
import com.example.sns.sns_project.domain.user.UserVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/user")
    @ResponseBody

    public UserVO getUser(@RequestBody UserRequestDto userRequestDto){
        UserVO user =userService.readUser(userRequestDto);
        return user;
    }

}
