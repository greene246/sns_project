package com.example.sns.sns_project.controller;

import com.example.sns.sns_project.domain.CommentRequestDto;
import com.example.sns.sns_project.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RequiredArgsConstructor
@RestController
public class CommentController {
    @Autowired
    private CommentService commentService;

    // comments save
    @PostMapping("/upload_comments")
    @ResponseBody
    public void upload_comments(@RequestBody CommentRequestDto commentRequestDto, HttpServletResponse response) throws IOException {
        commentService.upload_comment(commentRequestDto);
    }
}
