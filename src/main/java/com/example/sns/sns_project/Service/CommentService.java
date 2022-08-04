package com.example.sns.sns_project.service;

import com.example.sns.sns_project.domain.CommentRepository;
import com.example.sns.sns_project.domain.CommentRequestDto;
import com.example.sns.sns_project.domain.CommentVO;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

}