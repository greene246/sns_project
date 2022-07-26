package com.example.sns.sns_project.domain.user;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Timestamp;
@Table
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class UserVO {

    @Id
    private int id;

    @Column(name="userId", nullable = false)
    private String userId;

    @Column(name = "userPw", nullable = false)
    private String userPw;

    private String name;

    private String email;
    private Timestamp created_at;

}
