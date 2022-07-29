package com.example.sns.sns_project.domain.user;

import com.example.sns.sns_project.util.Timestamp;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name="boards")
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class BoardVO extends Timestamp {
    @Id
    private int id;

    @Column(name="user_id", nullable = false)
    private String user_id;

    @Column(name="img_url", nullable = false)
    private String img_url;

    @Column(name="contents", nullable = false)
    private String contents;

    @Column(name="like_cnt")
    private int like_cnt;

    @Column(name="public_scope")
    private int public_scope;

    @Column(name="delete_url")
    private String delete_url;

    public BoardVO(BoardRequestDto boardRequestDto){
        this.user_id = boardRequestDto.getUser_id();
        this.img_url = boardRequestDto.getImg_url();
        this.contents = boardRequestDto.getContents();
        this.like_cnt = boardRequestDto.getLike_cnt();
        this.public_scope = boardRequestDto.getPublic_scope();
        this.delete_url = boardRequestDto.getDelete_url();
    }
}
