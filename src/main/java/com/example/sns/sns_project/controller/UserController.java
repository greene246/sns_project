package com.example.sns.sns_project.controller;

import com.example.sns.sns_project.domain.UserRequestDto;
import com.example.sns.sns_project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

public class UserController {

    @Autowired
    private UserService userService;

    @PutMapping("/update")
    public void updateUser(@RequestParam(name="name") String name, @RequestParam(name = "email") String email, @RequestParam(name="userPw") String userPw){

        UserRequestDto userRequestDto = new UserRequestDto();
        userService.updateUser(userRequestDto);
    }


}
