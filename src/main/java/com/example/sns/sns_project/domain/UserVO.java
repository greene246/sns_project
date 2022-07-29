package com.example.sns.sns_project.domain;
import com.example.sns.sns_project.util.Timestamp;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDateTime;

@Table(name="users")
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class UserVO extends Timestamp {

    @Id
    private String user_id;

    @Column(name = "user_pw", nullable = false)
    private String user_pw;

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


    /*public UserVO(UserRequestDto userRequestDto){
        this.user_id = userRequestDto.getUser_id();
        this.user_pw = userRequestDto.getUser_pw();
        this.name = userRequestDto.getName();

    }*/

    // update
    public void update(UserRequestDto userRequestDto){
        //set
        this.name = userRequestDto.getName();
        this.email = userRequestDto.getEmail();
        this.user_pw = userRequestDto.getUser_pw();
    }



}
