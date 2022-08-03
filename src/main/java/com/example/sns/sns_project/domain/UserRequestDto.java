package com.example.sns.sns_project.domain;

import com.example.sns.sns_project.util.Timestamp;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class UserRequestDto {
    private String user_id,user_pw,name,email,thumbnail;

    public UserRequestDto(String user_id, String user_pw){
        this.user_id = user_id;
        this.user_pw = user_pw;
    }

    public UserRequestDto(String user_id, String user_pw, String name){
        this.user_id = user_id;
        this.user_pw = user_pw;
        this.name = name;
    }



}