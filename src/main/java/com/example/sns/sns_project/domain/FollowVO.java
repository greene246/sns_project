package com.example.sns.sns_project.domain;


import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Table(name="follow")
@Entity
@NoArgsConstructor
@Getter
public class FollowVO  {

    @Id
    private int id;

    @Column(name = "follower_id")
    private String follower_id;

    @Column(name = "following_id")
    private String following_id;


    public FollowVO(String follower_id, String following_id){
        this.follower_id = follower_id;
        this.following_id = following_id;
    }
    public FollowVO (String follower_id){
        this.follower_id = follower_id;
    }
}
