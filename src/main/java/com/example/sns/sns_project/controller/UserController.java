package com.example.sns.sns_project.controller;

import com.example.sns.sns_project.domain.UserRequestDto;
import com.example.sns.sns_project.domain.UserVO;
import com.example.sns.sns_project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

public class UserController {

    @Autowired
    private UserService userService;

/*    @PostMapping("/userPw")
    public UserVO getUserPw(@RequestBody UserRequestDto userRequestDto){
        UserVO userPw = userService.readUserPw(userRequestDto);
        return userPw;
    }*/

    @PutMapping("/update")
    public void updateUser(@RequestParam(name="name") String name, @RequestParam(name = "email") String email, @RequestParam(name="user_pw") String user_pw){

        UserRequestDto userRequestDto = new UserRequestDto(name, email, user_pw);
        userService.updateUser(userRequestDto);

    }

    @PutMapping("/updatePw")
    public void updatePw(@RequestParam(name="name") String name, @RequestParam(name="email") String email, @RequestParam(name="user_id") String user_id, @RequestParam(name="user_pw") String user_pw){
        UserRequestDto userRequestDto = new UserRequestDto(user_id, user_pw, name, email);

        UserVO userVO = userService.readUser(user_id);

        if(!user_pw.equals(userVO.getUser_pw())){
            userService.updateUser(userRequestDto);
        }




    }

    @PostMapping("/user")
    public UserVO getUser(@RequestBody UserRequestDto userRequestDto){
        UserVO user = userService.readUserPw(userRequestDto);
        return user;
    }


}
