package com.example.sns.sns_project.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {

    @RequestMapping(value = "/")  // 리퀘스메핑이 inedex에 붙인거다.(GET이 디폴트값)
    public String index(){
        return "index";

    }
    @RequestMapping("/main")
    public  String main(){

        return "main";
    }
    @RequestMapping("/join")
    public  String join(){

        return "join";
    }
    @RequestMapping("/logout")
    public  String logout(){

        return "logout";
    }

}
