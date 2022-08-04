package com.example.sns.sns_project.domain;

import com.example.sns.sns_project.util.Timestamp;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name="comments")
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class CommentVO extends Timestamp {
    @Id
    private int id;
    @Column(name="user_id", nullable = false)
    private int user_id;
    @Column(name="board_id", nullable = false)
    private int board_id;
    @Column(name="comment", nullable = false)
    private String comment;

    public CommentVO(CommentRequestDto commentRequestDto){
        this.user_id = commentRequestDto.getUser_id();
        this.board_id = commentRequestDto.getBoard_id();
        this.comment = commentRequestDto.getComment();
    }
}
