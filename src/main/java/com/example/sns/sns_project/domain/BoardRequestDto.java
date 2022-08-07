package com.example.sns.sns_project.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class BoardRequestDto {
    private int id;
    private String user_id;
    private String img_url;
    private String contents;
    private int like_cnt;
    private int public_scope;
    private String delete_url;

    public BoardRequestDto(String user_id, int like_cnt){
        this.user_id = user_id;
        this.like_cnt = like_cnt;
    }
}