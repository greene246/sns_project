package com.example.sns.sns_project.domain;

import com.example.sns.sns_project.util.Timestamp;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class SectionRequestDto {
    private int user_idI, board_id, like_cnt, public_scope;
    private String user_idS, img_url, contents, user_thumbnail;
    private int like_check;
    private LocalDateTime createdAt;

}
