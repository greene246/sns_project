package com.example.sns.sns_project.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class BoardRequestDto {
    String user_id;
    String img_url;
    String contents;
    int like_cnt;
    int public_scope;
    String delete_url;

    public BoardRequestDto(String user_id, String img_url){
        this.user_id = user_id;
        this.img_url = img_url;
    }
}
