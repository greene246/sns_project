package com.example.sns.sns_project.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {

    @RequestMapping("/")
    public String header(){
        return "main";
    }

    @RequestMapping("/main")
    public String main(){
        return "main";
    }

    @RequestMapping("/myPage")
    public String myPage(){
        return "myPage";
    }

    @RequestMapping("/updateMyInfo")
    public String updateMyInfo(){
        return "updateMyInfo";
    }

    @RequestMapping("/writeForm")
    public String writeForm(){return "writeForm";}
}
