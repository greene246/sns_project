package com.example.sns.sns_project.service;

import com.example.sns.sns_project.domain.LikesRepository;
import com.example.sns.sns_project.domain.LikesVo;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class LikesService {

    @Autowired
    private LikesRepository likesRepository;


    public boolean search(int userid, int serve){
        boolean check  = false;
        List<LikesVo> likes = likesRepository.findLikesByUser_id(userid);

        for(int i = 0; i < likes.size(); i ++) {

           if(likes.get(i).getBoard_id() == serve){
                check = true;
           }
        }

        return check;

    }
}
