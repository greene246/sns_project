package com.example.sns.sns_project.domain;

import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Timestamp;

@Table(name="users")
@NoArgsConstructor
@Entity
public class UserVO {

//    private String userId, userPw, name, email;
//    private Timestamp created_at;

    @Id
    private String userId;

    @Column(name="userPw", nullable = false)
    private String userPw;

    @Column(name="name", nullable = false)
    private String name;

    @Column(name="email", nullable = true)
    private String email;

    public UserVO(UserRequestDto userRequestDto){
        this.userId = userRequestDto.getUserId();
        this.userPw = userRequestDto.getUserPw();
        this.name = userRequestDto.getName();
//        this.email = userRequestDto.getEmail();
    }

    // update
    public void update(UserRequestDto userRequestDto){
        //set
        this.name = userRequestDto.getName();
        this.email = userRequestDto.getEmail();
        this.userPw = userRequestDto.getUserPw();
    }

}