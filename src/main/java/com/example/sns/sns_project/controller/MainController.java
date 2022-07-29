package com.example.sns.sns_project.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {

    @RequestMapping("/")
    public String index() {
        return "index";
    }
    @RequestMapping("/join")
    public String join() {
        return "join";
    }

    @RequestMapping("/main")
    public String main() {
        return "main";
    }

    @RequestMapping("/myPage")
    public String myPage() {
        return "myPage";
    }

    @RequestMapping("/updateMyInfo")
    public String updateMyInfo() {
        return "updateMyInfo";
    }
    @RequestMapping("/updateMyPw")
    public String updateMyPw() {
        return "updateMyPw";
    }



    @RequestMapping("/writeForm")
    public String writeForm() {
        return "writeForm";
    }
>>>>>>>>> Temporary merge branch 2
}
