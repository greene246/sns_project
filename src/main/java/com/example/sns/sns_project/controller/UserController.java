package com.example.sns.sns_project.controller;

import com.example.sns.sns_project.Service.UserService;
import com.example.sns.sns_project.domain.user.UserRequestDto;
import com.example.sns.sns_project.domain.user.UserVO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.example.sns.sns_project.domain.UserRequestDto;
import com.example.sns.sns_project.domain.UserVO;
import com.example.sns.sns_project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class UserController {

    @Autowired
    private UserService userService;

<<<<<<< HEAD
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
=======
//
//    @PostMapping("/chcek")
//    @ResponseBody
//    public List<UserVO> getAllUser(@RequestBody UserRequestDto userRequestDto){
//        List<UserVO> result = userService.readUserAll(userRequestDto);
//        if(result.isEmpty())
//            System.out.println("회원정보 확인필요");
//        else
//            System.out.println("로그인 완료");
//        return result;
//    }


    @PostMapping("/login")
      public void loginUser(@RequestParam(name="user_id") String id, @RequestParam(name="user_pw") String password, HttpServletRequest request , HttpServletResponse response) {
        HttpSession session = request.getSession();
        System.out.println("111111111111111");
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
>>>>>>> origin/Joohyeon




<<<<<<< HEAD
    }

    @PostMapping("/user")
    public UserVO getUser(@RequestBody UserRequestDto userRequestDto){
        UserVO user = userService.readUserPw(userRequestDto);
        return user;
    }


}
=======

}


>>>>>>> origin/Joohyeon
