package com.example.sns.sns_project.controller;

import com.example.sns.sns_project.service.UserService;
import com.example.sns.sns_project.domain.UserRequestDto;

import com.example.sns.sns_project.domain.UserVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@RestController
public class UserController {

    @Autowired
    private UserService userService;


    // login
    @PostMapping("/login")
      public void loginUser(@RequestParam(name="user_id") String id, @RequestParam(name="user_pw") String password, HttpServletRequest request , HttpServletResponse response) {
        HttpSession session = request.getSession();
        System.out.println("111111111111111");
        UserRequestDto user = new UserRequestDto(id, password);
        System.out.println(user.getUser_id());
        UserVO result = userService.readUserId(user.getUser_id());

        String url = "";
        System.out.println(result.getUser_pw());
        if (result.getUser_pw().equals(user.getUser_pw())) {
            url = "/main";

        } else {
            url = "/join";
        }

        session.setAttribute("user_id",result.getUser_id());
        session.setAttribute("name",result.getName());
        session.setAttribute("email",result.getEmail());
        session.setAttribute("user_pw",result.getUser_pw());


        try {
            response.sendRedirect(url);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    // join
    @PostMapping("/joinUser")
    public void addUser(@RequestParam(name="user_id") String id,
                        @RequestParam(name="user_pw") String password,
                        @RequestParam(name="name") String name,
                        @RequestParam(name="email") String email,
                        HttpServletResponse response){

        UserRequestDto user = new UserRequestDto(id, password,name,email) ;


        String url = "";

        if(userService.readUserId(user.getUser_id()) == null) {
            userService.createUser(user);
            System.out.println("insert 성공");
            url ="/";
        }
        else{
            System.out.println("아이디 중복");
            url = "/join";
        }

        try {
            response.sendRedirect(url);
        }catch(Exception e){
            e.printStackTrace();
        }
    }

    @PostMapping("/getUser")
    @ResponseBody
    public UserVO getUser(@RequestBody UserRequestDto userRequestDto){
        System.out.println("85 : "+userRequestDto.getUser_id());
        UserVO user = userService.readUser(userRequestDto);

        return user;
    }


}


