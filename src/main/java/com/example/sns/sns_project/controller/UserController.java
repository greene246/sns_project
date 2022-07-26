package com.example.sns.sns_project.controller;

import com.example.sns.sns_project.domain.UserRequestDto;
import com.example.sns.sns_project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

public class UserController {

    @Autowired
    private UserService userService;

    @PutMapping("/update")
    public void updateUser(@RequestBody UserRequestDto userRequestDto){
        userService.updateUser(userRequestDto);
    }
}
