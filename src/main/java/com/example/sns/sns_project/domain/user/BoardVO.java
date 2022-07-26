package com.example.sns.sns_project.domain.user;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.sql.Blob;

@Table(name="boards")
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class BoardVO {
    String id;

    String userId;

    Blob img;

    String contents;

    int like_cnt;

    int public_scope;
}
