package com.example.sns.sns_project.controller;

import com.example.sns.sns_project.domain.CommentRequestDto;
import com.example.sns.sns_project.domain.CommentVO;
import com.example.sns.sns_project.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

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

    @PostMapping("/commentsLoad")
    public List<CommentVO> commentsLoad(@RequestParam(name="board_id")int board_id){
        return commentService.comments_load(board_id);
    }

    @PostMapping("/del_comment")
    public void del_comment(@RequestParam(name="comments")int id){
        commentService.delete_comments(id);
    }
}
