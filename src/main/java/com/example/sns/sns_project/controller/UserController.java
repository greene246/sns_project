package com.example.sns.sns_project.controller;

import com.example.sns.sns_project.Service.UserService;
import com.example.sns.sns_project.domain.user.UserRequestDto;
import com.example.sns.sns_project.domain.user.UserVO;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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

    @PostMapping("/chcek")
    @ResponseBody
    public List<UserVO> getAllUser(@RequestBody UserRequestDto userRequestDto){
        List<UserVO> result = userService.readUserAll(userRequestDto);
        if(result.isEmpty())
            System.out.println("회원정보 확인필요");
        else
            System.out.println("로그인 완료");
        return result;
    }
}
