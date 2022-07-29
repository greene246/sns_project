package com.example.sns.sns_project.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {

    @RequestMapping("/")
    public String header() {
        return "index";
    }

    @RequestMapping("/main")
    public String main(){
        return "main";
    }

    @RequestMapping("/myPage")
    public String myPage(){
        return "myPage";
    }

    @RequestMapping("/writeForm")
    public String writeForm(){
        return "writeForm";
    };

    @RequestMapping("/updateMyInfo")
    public String updateMyInfo(){
        return "updateMyInfo";
    }
    @RequestMapping("/updateMyPw")
    public String updateMyPw() {
        return "updateMyPw";
    }

    @RequestMapping("/join")
    public String join(){ return "join"; }

    @RequestMapping("/deleteUser")
    public String deleteUser(){ return "deleteUser"; }
}
