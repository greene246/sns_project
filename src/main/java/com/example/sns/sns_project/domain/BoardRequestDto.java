package com.example.sns.sns_project.domain.user;

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
}
