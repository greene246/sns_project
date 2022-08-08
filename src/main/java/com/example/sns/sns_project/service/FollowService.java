package com.example.sns.sns_project.service;

import com.example.sns.sns_project.domain.FollowRepository;
import com.example.sns.sns_project.domain.FollowVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FollowService {

    @Autowired
    private FollowRepository followRepository;

    public FollowVO add(String follower_id, String following_id) {
        FollowVO follow = new FollowVO(follower_id, following_id);
        return followRepository.save(follow);
    }

    public int findId(String follower_id, String following_id){
        List<FollowVO> follow = followRepository.findAll();

        for(int i=0; i<follow.size(); i++){
            if(follower_id.equals(follow.get(i).getFollower_id())
                    && following_id.equals(follow.get(i).getFollowing_id())){
                return follow.get(i).getId();
            }
        }
        return -1;
    }




    public void remove(int id) {

        followRepository.deleteById(id);
    }

    public boolean followCheck(String follower_id, String following_id) {
        List<FollowVO> follow = followRepository.findAll();

        for (int i = 0; i < follow.size(); i++) {
            if (follower_id.equals(follow.get(i).getFollower_id())
                    && following_id.equals(follow.get(i).getFollowing_id())) {
                return true;
            }
        }
        return false;
    }



}
