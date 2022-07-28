package com.example.sns.sns_project.domain;

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
    private String id;

    @Column(name="userId", nullable = false)
    private String userId;

    @Column(name="img", nullable = false)
    private String img;

    @Column(name="contents", nullable = false)
    private String contents;

    @Column(name="like_cnt")
    private int like_cnt;

    @Column(name="public_scope")
    private int public_scope;
}
