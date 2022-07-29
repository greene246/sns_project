<<<<<<<< HEAD:src/main/java/com/example/sns/sns_project/domain/UserVO.java
package com.example.sns.sns_project.domain;
import com.example.sns.sns_project.util.Timestamp;
========
>>>>>>>> origin/Joohyeon:src/main/java/com/example/sns/sns_project/domain/user/UserVO.java

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

    public UserVO(UserRequestDto userRequestDto){
        this.user_id = userRequestDto.getUser_id();
        this.user_pw = userRequestDto.getUser_pw();
        this.name = userRequestDto.getName();
        this.email = userRequestDto.getEmail();
    }



}
