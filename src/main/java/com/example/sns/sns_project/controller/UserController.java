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
        if (result.getUser_pw().equals(user.getUser_pw())) {
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
    @PostMapping("/removeUser")
    public void deleteUser(@RequestParam(name="log") int log,
                           @RequestParam(name="user_pw") String user_pw,
                           HttpServletRequest request,
                           HttpServletResponse response){
        HttpSession session = request.getSession();


        String url = "";
        if(userService.readLog(log).getUser_pw().equals(user_pw)){
            userService.deleteUser(userService.readLog(log));
            session.invalidate();
            System.out.println("회원탈퇴 성공");
            url ="/";
        }

        else{
            System.out.println("회원정보 확인");
            url = "/deleteUser?check=check";
        }

        try {
            response.sendRedirect(url);
        }catch(Exception e){
            e.printStackTrace();
        }
    }

    // 프로필 사진, 이름, 이메일 변경
    @ResponseBody
    @PostMapping("/update")
    public void updateUser(@RequestBody UserRequestDto userRequestDto, HttpServletResponse response){
        System.out.println("userID : " + userRequestDto.getUser_id());

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

    // 비밀번호 업데이트
    @PostMapping("/updatePw")
    public void updatePw(@RequestBody UserRequestDto userRequestDto, HttpServletResponse response) {
        boolean check = userService.updateUserPw(userRequestDto);

        if(check){
            System.out.println("비밀번호 업뎃 성공");
        }
        else{
            System.out.println("비밀번호 업뎃 실패");
        }

        String url = "";
        url = "/updateMyPw";

        try {
            response.sendRedirect(url);
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    // 회원가입때 아이디 중복 검사
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

    // 비밀번호 찾기
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

    // 유저 고유코드 받아서 유저 정보 리턴
    @PostMapping("/getInfo")
    public UserVO getInfo(@RequestParam(name="log") int log) {
        return userService.readLog(log);
    }

    // 유저 아이디 받아서 유저 정보 리턴
    @PostMapping("/getUserId")
    public UserVO getUserId(@RequestParam(name="user_id") String user_id){
        return userService.readUserId(user_id);
    }

    @GetMapping("/getThumbnail")
    public String getThumbnail(@RequestParam(name = "id") String id) {
        String temp = userService.findThumbnailById(id);
        return temp;
    }

    //log 값을 사용해 해당 유저의 정보를 가져온다.
    @GetMapping("/getUser/{log}")
    public UserVO getUser(@PathVariable("log") int log){
        System.out.println("Usercontroller에 들어옴");
        System.out.println("log: " + log);
        return userService.findUser(log);
    }

    @PostMapping("/getUserLists")
    @ResponseBody
    public List<UserVO> getUserList(@RequestBody String userList) {
        if (userList.length() > 1) {
            userList = userList.substring(1, userList.length() - 1);
        }
        String[] userArr = userList.split(",");

        return userService.getUser_list(userArr);
    }

}

