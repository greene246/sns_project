package com.example.sns.sns_project.service;

import com.example.sns.sns_project.domain.CommentRepository;
import com.example.sns.sns_project.domain.CommentRequestDto;
import com.example.sns.sns_project.domain.CommentVO;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Service
public class CommentService {

    @Autowired
    private CommentRepository commentRepository;

    // comment save
    public void upload_comment(CommentRequestDto commentRequestDto){
        CommentVO comment = new CommentVO(commentRequestDto);
        commentRepository.save(comment);
    }

    public List<CommentVO> comments_load(int board_id){
        List<CommentVO> comments = commentRepository.findAll();
        List<CommentVO> loaded_comments = new ArrayList<>();
        for(int i=0; i<comments.size(); i++){
            if(comments.get(i).getBoard_id() == board_id){
                loaded_comments.add(comments.get(i));
            }
        }
        return loaded_comments;
    }
}