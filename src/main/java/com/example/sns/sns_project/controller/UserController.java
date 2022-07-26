package com.example.sns.sns_project.controller;

import com.example.sns.sns_project.domain.UserRequestDto;
import com.example.sns.sns_project.domain.UserVO;
import com.example.sns.sns_project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/login")
    //  public void login(@RequestBody UserRequestDto userRequestDto, HttpServletRequest request, HttpServletResponse response){
    public void login(@RequestParam(name="id") String id, @RequestParam(name ="password") String pw,HttpServletRequest request, HttpServletResponse response){

        UserRequestDto user = new UserRequestDto(id,pw);
        System.out.println(id);
        //   UserVO user = getUser(userRequestDto);
        String url ="";
        if(getUser(user) != null){
            url = "/main";
        }
        else{
            url = "/login";
        }
        HttpSession session = request.getSession();
        session.setAttribute("log",user.getId());
        try {
            request.getRequestDispatcher(url).forward(request, response);
        }
        catch (Exception e){
            e.printStackTrace();
        }
    }


    @GetMapping("/user") ///v1/search/u
    // ser"?id=***
    // @GetMapping("/v1/search/user/{id}/{pw}") ///v1/search/user"?id=***
    // public User getUser(@RequestParam(name="id") String id, @RequestParam(name ="pw") String pw){
    // public UserVO getUser(@RequestBody UserRequestDto userRequestDto){ // 요청시 JSON 객체를 받아서 처리
    public UserVO getUser(@RequestBody UserRequestDto userRequestDto){
        //  public UserVO getUser(@PathVariable("id") String id){ // 요청시 JSON 객체를 받아서 처리
        //   UserVO user = new UserVO("abcd","1234","홍둘리");
        //   if(userRequestDto.getId().equals(user.getId()) && userRequestDto.getPw().equals(user.getPw())){
        //         return user;
        //     }
//        if(id.equals((user.getId()))){
//            return  user;
//        }
        //    return null;
        // return new User("abcd","1234","홍길동");

        // JpaRepository 를 통해서 PK로 특정 유저를 조회 -> 존재하면 -> UserVo 반환
        UserVO user = userService.readUser(userRequestDto);
        if(user == null)
            System.out.println("NULL");
        return  user;

    }
    @PostMapping("/joins")
    public void joinUser(@RequestParam(name="id") String id,@RequestParam(name="password") String pw,@RequestParam(name="name") String name,HttpServletRequest request, HttpServletResponse response){
        //아이디 중복 확인
        UserRequestDto user = new UserRequestDto(id,pw,name);
        UserVO check = userService.createUser(user);
        System.out.println("check: " + check);
        String url = "";
        if(check != null) {
            url = "./";
        }
        else{
            url = "/join";
        }

        HttpSession session = request.getSession();
        try {
            request.getRequestDispatcher(url).forward(request, response);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @PutMapping("/update")
    public void updateUser(@RequestBody UserRequestDto userRequestDto){
        userService.updateUser(userRequestDto);
    }

    @DeleteMapping("/delete")
    public void deleteUser(@RequestBody UserRequestDto userRequestDto){
        userService.deleteUser(userRequestDto);
    }
}
