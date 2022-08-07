package com.example.sns.sns_project.service;

import com.example.sns.sns_project.domain.*;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class LikesService {

    @Autowired
    private LikesRepository likesRepository;



    //likes의 id 찾기
    public int readLikesId(LikesVo likesVo) {
        List<LikesVo> user = likesRepository.findAll();
        int num = 0;
        for(int i=0; i<user.size(); i++) {
            if(user.get(i).getUser_id() == likesVo.getUser_id() && user.get(i).getBoard_id() == likesVo.getBoard_id())
                num = user.get(i).getId();
        }
        return num;
    }


    //
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

    // 기존 좋아요 목록 찾기
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
    //DB에 좋아요 추가
    public void addHeart(LikesRequestDto likesRequestDto){

        LikesVo likes = new LikesVo(likesRequestDto);
        likesRepository.save(likes);
    }

    //DB에 좋아요 삭제
    public void deleteHeart(LikesRequestDto likesRequestDto){

        LikesVo likes = new LikesVo(likesRequestDto);
        int check = readLikesId(likes);
        likesRepository.deleteById(check);

    }
}