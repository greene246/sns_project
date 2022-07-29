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
    int public_scope; // 공개범위 0.전체 1.친구만 2.비공개
    String delete_url;
}
