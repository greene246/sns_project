package com.example.sns.sns_project.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class BoardRequestDto {
    int id;
    String user_id;
    String img_url;
    String contents;
    int like_cnt;
    int public_scope;
    String delete_url;

}
