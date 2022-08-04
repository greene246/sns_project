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


    public boolean search(int userid, int log) {

        boolean check = false;
        List<LikesVo> likes = likesRepository.findLikesByUserId(log);

        for (int i = 0; i < likes.size(); i++) {
            if (likes.get(i).getBoard_id() == userid) {
                check = true;
            }
        }
        return check;
    }

    public boolean dibsSearch(int boardid, int log){
        boolean check = false;

        List<LikesVo> likes = likesRepository.findLikesByBoardId(boardid);

        for (int i = 0; i < likes.size(); i++) {

            if (likes.get(i).getUser_id() == log) {
                check = true;
            }
        }

        return check;

    }
}