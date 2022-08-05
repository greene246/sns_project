package com.example.sns.sns_project.controller;

import com.example.sns.sns_project.service.UserService;

import com.example.sns.sns_project.domain.UserVO;
import com.example.sns.sns_project.domain.UserRequestDto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    // login
    @PostMapping("/login")
    public void loginUser(@RequestParam(name="user_id") String user_id, @RequestParam(name="user_pw") String user_pw, HttpServletRequest request , HttpServletResponse response) {
        HttpSession session = request.getSession();

        UserRequestDto user = new UserRequestDto(user_id, user_pw);

        UserVO result = userService.readUserId(user.getUser_id());

        String url = "";
        if (result != null && result.getUser_id().equals(user.getUser_id()) && result.getUser_pw().equals(user.getUser_pw())) {
            url = "/main";
        } else {
            url = "/?check=chcek";
        }

        session.setAttribute("log",result.getId());

        try {
            response.sendRedirect(url);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // 회원가입
    @PostMapping("/joinUser")
    public void addUser(@RequestParam(name="user_id") String user_id,
                        @RequestParam(name="user_pw") String user_pw,
                        @RequestParam(name="name") String name,
                        @RequestParam(name="email") String email,
                        HttpServletResponse response) {

        String thumbnail = "https://i.postimg.cc/2jtmv9kZ/user.png";

        UserRequestDto user = new UserRequestDto(user_id,user_pw,name,email,thumbnail);

        String url = "";

        if(userService.readUserId(user.getUser_id()) == null) {
            userService.createUser(user);
            System.out.println("insert 성공");
            url ="/";
        }
        else{
            System.out.println("아이디 중복");
            url = "/join?check=chcek";
        }

        try {
            response.sendRedirect(url);
        }catch(Exception e){
            e.printStackTrace();
        }
    }

    // 회원탈퇴
    @PostMapping("/deleteUser")
    public void deleteUser(@RequestParam(name="user_id") String user_id,
                           @RequestParam(name="name") String name,
                           @RequestParam(name="email") String email,
                           @RequestParam(name="user_pw") String user_pw,
                           HttpServletRequest request,
                           HttpServletResponse response){
        HttpSession session = request.getSession();

        UserRequestDto user = new UserRequestDto(user_id,user_pw,name,email);

        String url = "";
        if(userService.checkUser(user) != null) {
            userService.deleteUser(userService.checkUser(user));
            session.invalidate();
            System.out.println("회원탈퇴 성공");
            url ="/";
        }
        else{
            System.out.println("회원정보 확인");
            url = "/deleteUser";
        }

        try {
            response.sendRedirect(url);
        }catch(Exception e){
            e.printStackTrace();
        }
    }

    // 이름, 이메일 변경
    @ResponseBody
    @PostMapping("/update")
    public void updateUser(@RequestBody UserRequestDto userRequestDto,  HttpServletRequest request, HttpServletResponse response){
//        UserRequestDto userRequestDto = new UserRequestDto(user_id, user_pw, name, email, thumbnail);
        System.out.println(userRequestDto.getUser_id());
        boolean check = userService.updateUser(userRequestDto);

        if(check){
            System.out.println("프로필 사진, 이름, 이메일 변경 성공");
        }
        else{
            System.out.println("프로필 사진, 이름, 이메일 업데이트 실패");
        }

        String url = "";
        url = "/updateMyInfo";

        try {
            response.sendRedirect(url);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


    /*// 이름, 이메일 변경
    @PostMapping("/update")
    public void updateUser(@RequestParam(name="user_id") String user_id,
                           @RequestParam(name="name") String name,
                           @RequestParam(name = "email") String email,
                           @RequestParam(name="user_pw") String user_pw,
                           @RequestParam(name="img_url") String thumbnail,
                           HttpServletRequest request, HttpServletResponse response){

        HttpSession session = request.getSession();

        UserRequestDto userRequestDto = new UserRequestDto(user_id, user_pw, name, email, thumbnail);

        boolean check = userService.updateUser(userRequestDto);

        if(check){
            session.setAttribute("name",userRequestDto.getName());
            session.setAttribute("email",userRequestDto.getEmail());
            session.setAttribute("user_pw",userRequestDto.getUser_pw());
            session.setAttribute("thumbnail",userRequestDto.getThumbnail());

            System.out.println("프로필 사진, 이름, 이메일 변경 성공");
        }
        else{
            System.out.println("프로필 사진, 이름, 이메일 업데이트 실패");
        }
        String url = "";
        url = "/updateMyInfo";

        try {
            response.sendRedirect(url);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }*/

    /*@PostMapping("/updatePw")   // 새 비밀번호, 새 비밀번호 확인
    public void updatePw(@RequestParam(name="name") String name,
                         @RequestParam(name="email") String email,
                         @RequestParam(name="user_id") String user_id,
                         @RequestParam(name="pw_new") String pw_new,
                         @RequestParam(name="pw_check") String pw_check,
                         @RequestParam(name="pw_past") String pw_past,
                         @RequestParam(name="thumbnail") String thumbnail,
                         HttpServletRequest request, HttpServletResponse response) {
        HttpSession session = request.getSession();

        String user_pw = (String) session.getAttribute("user_pw");
        if(pw_new.equals(pw_check) && pw_past.equals(user_pw)){

            UserRequestDto userRequestDto = new UserRequestDto(user_id, pw_new, name, email, thumbnail);
            boolean check = userService.updateUser(userRequestDto);

            if(check){
                session.setAttribute("name",userRequestDto.getName());
                session.setAttribute("email",userRequestDto.getEmail());
                session.setAttribute("user_pw",userRequestDto.getUser_pw());
                session.setAttribute("thumbnail",userRequestDto.getThumbnail());

                System.out.println("비밀번호 업데이트 성공");
            }
        }
        else{
            System.out.println("비밀번호 입력 오류");
        }
        String url = "";
        url = "/updateMyPw";

        try{
            response.sendRedirect(url);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }*/

    @PostMapping("/getUser")
    @ResponseBody
    public String getUser(@RequestBody UserRequestDto userRequestDto){
        UserVO user = userService.readUser(userRequestDto);

        return user.getUser_id();
    }


    // 이전 비밀번호 확인
    @PostMapping("/pastPw")
    @ResponseBody
    public UserVO checkPw(@RequestBody UserRequestDto userRequestDto){
        UserVO user = userService.readUserPw(userRequestDto);

        return user;
    }

    // 아이디 찾기
    @PostMapping("/findId")
    public void findId(@RequestParam (name="name") String name,
                       @RequestParam(name="email") String email,
                       HttpServletRequest request,
                       HttpServletResponse response) {
        HttpSession session = request.getSession();

        UserVO user = userService.findName(name);

        if(user!=null && user.getEmail().equals(email)){

            session.setAttribute("id",user.getUser_id());

            String url ="";
            url = "/findIdPage";
            try{
                response.sendRedirect(url);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        else{
            String url ="";
            url = "/findIdPage?check=check";
            try{
                response.sendRedirect(url);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    @PostMapping("/findPw")
    public void findPw(@RequestParam(name="user_id") String user_id,
                       @RequestParam (name="name") String name,
                       @RequestParam(name="email") String email,
                       HttpServletRequest request,
                       HttpServletResponse response) {
        HttpSession session = request.getSession();

        UserVO user = userService.readUserId(user_id);

        if(user != null && user.getName().equals(name) && user.getEmail().equals(email)){
            session.setAttribute("pw",user.getUser_pw());
            String url ="";
            url = "/findPwPage";
            try{
                response.sendRedirect(url);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        else {
            String url ="";
            url = "/findPwPage?check=check";
            try{
                response.sendRedirect(url);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

    }

    @PostMapping("/getInfo")
    public UserVO getInfo(@RequestParam(name="log") int log){
        return userService.readLog(log);
    }

    @GetMapping("/getThumbnail")
    public String getThumbnail(@RequestParam(name = "id") String id) {
        String temp = userService.findThumbnailById(id);
        System.out.println(id);
        System.out.println(temp);
        return temp;

    }

    @PostMapping("/getUseridWhithBoardid")
    public UserVO getUserid(@RequestParam(name="board_id")int board_id){
        System.out.println("board_id : " + board_id);
        userService.getUwithB(board_id);

        return null;
    }

}

