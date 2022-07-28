package com.example.sns.sns_project.controller;

import com.example.sns.sns_project.service.UserService;
import com.example.sns.sns_project.domain.UserVO;
import com.example.sns.sns_project.domain.UserRequestDto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class UserController {

    @Autowired
    private UserService userService;

/*    @PostMapping("/userPw")
    public UserVO getUserPw(@RequestBody UserRequestDto userRequestDto){
        UserVO userPw = userService.readUserPw(userRequestDto);
        return userPw;
    }*/

    @PostMapping("/update")
    public void updateUser(@RequestParam(name="user_id") String user_id, @RequestParam(name="name") String name, @RequestParam(name = "email") String email, @RequestParam(name="user_pw") String user_pw, HttpServletResponse response){

        System.out.println("name: "+name);
        System.out.println("email: " + email);
        System.out.println("user_pw: "+ user_pw);

        UserRequestDto userRequestDto = new UserRequestDto(user_id, user_pw, name, email);


        boolean check = userService.updateUser(userRequestDto);

        System.out.println("check:" + check );

        String url = "";
        url = "/updateMyInfo";

        try {
            response.sendRedirect(url);
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    @PutMapping("/updatePw")
    public void updatePw(@RequestParam(name="name") String name, @RequestParam(name="email") String email, @RequestParam(name="user_id") String user_id, @RequestParam(name="user_pw") String user_pw) {
        UserRequestDto userRequestDto = new UserRequestDto(user_id, user_pw, name, email);

        UserVO userVO = userService.readUser(user_id);

        if (!user_pw.equals(userVO.getUser_pw())) {
            userService.updateUser(userRequestDto);
        }
    }

    @PostMapping("/login")
      public void loginUser(@RequestParam(name="user_id") String id, @RequestParam(name="user_pw") String password, HttpServletRequest request , HttpServletResponse response) {
        HttpSession session = request.getSession();
        UserRequestDto user = new UserRequestDto(id, password);
        System.out.println(user.getUser_id());
        UserVO result = userService.readUser(user.getUser_id());

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

    @PostMapping("/user")
    public UserVO getUser(@RequestBody UserRequestDto userRequestDto){
        UserVO user = userService.readUserPw(userRequestDto);
        return user;
    }


}



