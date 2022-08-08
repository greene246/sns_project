package com.example.sns.sns_project.domain;

import com.example.sns.sns_project.util.Timestamp;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.apache.catalina.User;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name="users")
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Getter
public class UserVO extends Timestamp {

    @Id
    private int id;

    @Column(name="user_id", nullable = false)
    private String user_id;

    @Column(name="user_pw", nullable = false)
    private String user_pw;

    @Column(name="name", nullable = false)
    private String name;

    @Column(name="email", nullable = true)
    private String email;

    @Column(name="thumbnail", nullable = true)
    private String thumbnail;


    public UserVO(UserRequestDto userRequestDto){
        this.user_id = userRequestDto.getUser_id();
        this.user_pw = userRequestDto.getUser_pw();
        this.name = userRequestDto.getName();
        this.email = userRequestDto.getEmail();
        this.thumbnail = userRequestDto.getThumbnail();
    }

    // update
    public void update(UserRequestDto userRequestDto){
        //set
        this.user_id = userRequestDto.getUser_id();
        this.name = userRequestDto.getName();
        this.email = userRequestDto.getEmail();
        this.thumbnail = userRequestDto.getThumbnail();

    }

    // 비밀번호 업뎃
    public void updatePw(UserRequestDto userRequestDto){
        this.user_pw = userRequestDto.getUser_pw();
    }

}