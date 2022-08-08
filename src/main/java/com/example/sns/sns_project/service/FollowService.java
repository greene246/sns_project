package com.example.sns.sns_project.service;

import com.example.sns.sns_project.domain.FollowRepository;
import com.example.sns.sns_project.domain.FollowVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Service
public class FollowService {

    @Autowired
    private FollowRepository followRepository;

    public FollowVO add(String follower_id, String following_id) {
        FollowVO follow = new FollowVO(follower_id, following_id);
        return followRepository.save(follow);
    }

    public int findId(String follower_id, String following_id) {
        List<FollowVO> follow = followRepository.findAll();

        for (int i = 0; i < follow.size(); i++) {
            if (follower_id.equals(follow.get(i).getFollower_id())
                    && following_id.equals(follow.get(i).getFollowing_id())) {
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

    //유저페이지 팔로워 수
    public HashMap<String, List<FollowVO>> followCount(String follower_id) {
        System.out.println(follower_id);
        List<FollowVO> follow = followRepository.findAll();
        List<FollowVO> follower = new ArrayList<>();
        List<FollowVO> following = new ArrayList<>();
        HashMap<String, List<FollowVO>> follows = new HashMap<>();


        int cnt = 0;
        for (int i = 0; i < follow.size(); i++) {
            if (follower_id.equals(follow.get(i).getFollower_id())) {
                follower.add(follow.get(i));
            }
            if(follower_id.equals(follow.get(i).getFollowing_id())){
                following.add(follow.get(i));
            }
        }
        follows.put("follower", follower);
        follows.put("following", following);

        return follows;
    }

    //유저페이지 팔로우 수
    public int followingCount(String follower_id){
        List<FollowVO> follow = followRepository.findAll();
        int cnt = 0;
        for (int i = 0; i < follow.size(); i++) {
            if (follower_id.equals(follow.get(i).getFollower_id())) {
                cnt ++;
            }
            return cnt;
        }
        return -1;
    }

}