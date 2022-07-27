package com.example.sns.sns_project.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
//@AllArgsConstructor
@Getter
public class UserRequestDto {
    private String userId,userPw,name,email;

    // login
    public UserRequestDto(String userId, String userPw){
        this.userId = userId;
        this.userPw = userPw;
    }

    // join
    public UserRequestDto(String userId, String userPw, String name, String email){
        this.userId = userId;
        this.userPw = userPw;
        this.name = name;
        this.email = email;
    }

    // updateMe
    public UserRequestDto(String name, String email, String userPw){
        this.name = name;
        this.email = email;
        this.userPw = userPw;
    }

    // updatePw
//    public UserRequestDto(String userPw){
//        this.userPw = userPw;
//    }
}