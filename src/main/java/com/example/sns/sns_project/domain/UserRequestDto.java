package com.example.sns.sns_project.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

//@AllArgsConstructor
@NoArgsConstructor
@Getter
public class UserRequestDto {
    private String id, pw, name;

    public UserRequestDto(String id,String pw){
        this.id = id;
        this.pw = pw;
    }
    public UserRequestDto(String id,String pw,String name){
        this.id = id;
        this.pw = pw;
        this.name= name;
    }
}


