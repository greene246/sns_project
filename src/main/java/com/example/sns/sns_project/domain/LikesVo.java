package com.example.sns.sns_project.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name="likes")
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class LikesVo {
    @Id
    private int id;

    @Column(name="user_id", nullable = false)
    private int user_id;

    @Column(name="board_id", nullable = false)
    private int board_id;

    public LikesVo(LikesRequestDto likesRequestDto){
        this.user_id = likesRequestDto.getUser_id();
        this.board_id = likesRequestDto.getBoard_id();
    }
}