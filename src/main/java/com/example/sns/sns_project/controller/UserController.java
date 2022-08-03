package com.example.sns.sns_project.controller;

import com.example.sns.sns_project.service.UserService;
import com.example.sns.sns_project.domain.UserRequestDto;

import com.example.sns.sns_project.domain.UserVO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class UserController {

    @Autowired
    private UserService userService;


    // login
    // 로그인
    @PostMapping("/login")
    public void loginUser(@RequestParam(name = "user_id") String id, @RequestParam(name = "user_pw") String password, HttpServletRequest request, HttpServletResponse response) {
        HttpSession session = request.getSession();
        System.out.println("111111111111111");
        UserRequestDto user = new UserRequestDto(id, password);
        System.out.println(user.getUser_id());
        UserVO result = userService.readUserId(user.getUser_id());

        String url = "";
        if (result.getUser_pw().equals(user.getUser_pw())) {
            url = "/main";

        } else {
            url = "/join";
        }

        session.setAttribute("user_id", result.getUser_id());
        session.setAttribute("name", result.getName());
        session.setAttribute("email", result.getEmail());
        session.setAttribute("user_pw", result.getUser_pw());

//바보바보바보바보바보바보바보바보바보바보바보바보바보바보바보바보
        try {
            response.sendRedirect(url);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // 회원가입
    @PostMapping("/joinUser")
    public void addUser(@RequestParam(name = "user_id") String id,
                        @RequestParam(name = "user_pw") String password,
                        @RequestParam(name = "name") String name,
                        @RequestParam(name = "email") String email,
                        HttpServletResponse response) {

        UserRequestDto user = new UserRequestDto(id, password, name, email);

        String url = "";

        if (userService.readUserId(user.getUser_id()) == null) {
            userService.createUser(user);
            System.out.println("insert 성공");
            url = "/";
        } else {
            System.out.println("아이디 중복");
            url = "/join";
        }

        try {
            response.sendRedirect(url);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // 회원탈퇴
    @PostMapping("/deleteUser")
    public void deleteUser(@RequestParam(name = "user_id") String user_id,
                           @RequestParam(name = "name") String name,
                           @RequestParam(name = "email") String email,
                           @RequestParam(name = "user_pw") String user_pw,
                           HttpServletRequest request,
                           HttpServletResponse response) {
        HttpSession session = request.getSession();

        UserRequestDto user = new UserRequestDto(user_id, user_pw, name, email);

        String url = "";
        if (userService.checkUser(user) != null) {
            userService.deleteUser(user);
            session.invalidate();
            System.out.println("회원탈퇴 성공");
            url = "/";
        } else {
            System.out.println("회원정보 확인");
            url = "/join";
        }

        try {
            response.sendRedirect(url);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @PostMapping("/update") // 이름, 이메일 변경
    public void updateUser(@RequestParam(name = "user_id") String user_id, @RequestParam(name = "name") String name, @RequestParam(name = "email") String email, @RequestParam(name = "user_pw") String user_pw, HttpServletRequest request, HttpServletResponse response) {
        HttpSession session = request.getSession();

        System.out.println("name: " + name);
        System.out.println("email: " + email);
        System.out.println("user_pw: " + user_pw);

        UserRequestDto userRequestDto = new UserRequestDto(user_id, user_pw, name, email);


        boolean check = userService.updateUser(userRequestDto);

        System.out.println("check:" + check);

        if (check) {
            session.setAttribute("name", userRequestDto.getName());
            session.setAttribute("email", userRequestDto.getEmail());
            session.setAttribute("user_pw", userRequestDto.getUser_pw());

            System.out.println("이름, 이메일 변경 성공");
        }
        String url = "";
        url = "/updateMyInfo";

        try {
            response.sendRedirect(url);
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    @PostMapping("/updatePw")   // 새 비밀번호, 새 비밀번호 확인
    public void updatePw(@RequestParam(name = "name") String name, @RequestParam(name = "email") String email, @RequestParam(name = "user_id") String user_id, @RequestParam(name = "pw_new") String pw_new, @RequestParam(name = "pw_check") String pw_check, HttpServletRequest request, HttpServletResponse response) {
        HttpSession session = request.getSession();

        if (pw_new.equals(pw_check)) {
            System.out.println("비밀번호 업데이트 성공");

            UserRequestDto userRequestDto = new UserRequestDto(user_id, pw_new, name, email);
            boolean check = userService.updateUser(userRequestDto);

            session.setAttribute("name", userRequestDto.getName());
            session.setAttribute("email", userRequestDto.getEmail());
            session.setAttribute("user_pw", userRequestDto.getUser_pw());
        } else {
            System.out.println("비밀번호 업데이트 실패");
        }
        String url = "";
        url = "/updateMyPw";


        try {
            response.sendRedirect(url);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @PostMapping("/getUser")
    @ResponseBody
    public UserVO getUser(@RequestBody UserRequestDto userRequestDto) {
        UserVO user = userService.readUser(userRequestDto);

        return user;
    }

    @GetMapping("/getThumbnail")
    public String getThumbnail(@RequestParam(name = "id") String id) {
        String temp = userService.findThumbnailById(id);
        System.out.println(id);
        System.out.println(temp);
        return temp;

    }

}

