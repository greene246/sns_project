package com.example.sns.sns_project.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class LikesRequestDto {
    private int id, user_id, board_id;
    public LikesRequestDto(int user_id, int board_id){
        this.user_id = user_id;
        this.board_id = board_id;
    }
}