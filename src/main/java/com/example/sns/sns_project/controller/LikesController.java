package com.example.sns.sns_project.controller;

import com.example.sns.sns_project.domain.BoardVO;
import com.example.sns.sns_project.domain.LikesVo;
import com.example.sns.sns_project.service.LikesService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RequiredArgsConstructor
@RestController
public class LikesController {

    private LikesService likesService;

    @GetMapping("/likesSearch/{num}")
    public boolean search(@PathVariable("num") int num, HttpServletRequest request, HttpServletResponse response){

        String temp = request.getParameter("_boardid");
        int serve = Integer.parseInt(temp);

        return likesService.search(num,serve);
    }

}
