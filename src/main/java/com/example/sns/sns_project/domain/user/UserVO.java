package com.example.sns.sns_project.domain.user;

import com.example.sns.sns_project.util.Timestamp;

import javax.persistence.Column;
import javax.persistence.Id;
import java.sql.Time;

public class UserVO extends Timestamp {

    @Id
    private int id;
//    private String userId, userPw, name, email;
//    private Timestamp created_at;

    @Column(name="user_id", nullable = false)
    private String user_id;

    @Column(name="user_pw", nullable = false)
    private String user_pw;

    @Column(name="name", nullable = false)
    private String name;

    @Column(name="email", nullable = true)
    private String email;


}
