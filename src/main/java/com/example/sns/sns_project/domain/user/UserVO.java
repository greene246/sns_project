
package com.example.sns.sns_project.domain.user;

import javax.persistence.Column;
import javax.persistence.Id;
import java.sql.Timestamp;

public class UserVO {

    @Id
    private int id;
//    private String userId, userPw, name, email;
//    private Timestamp created_at;

    @Column(name="userId", nullable = false)
    private String userId;

    @Column(name="userPw", nullable = false)
    private String userPw;

    @Column(name="name", nullable = false)
    private String name;
    @Column(name="email", nullable = true)
    private String email;


}
