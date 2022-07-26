package com.example.sns.sns_project.domain.user;

import javax.persistence.Column;
import java.sql.Timestamp;

public class UserVO {

    private int id;
//    private String userId, userPw, name, email;
//    private Timestamp created_at;

    @Column(name="userId", nullable = false)
    private String userId;
    // commit

}
