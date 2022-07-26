package com.example.sns.sns_project.domain.user;
import com.example.sns.sns_project.util.Timestamp;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDateTime;

@Table
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class UserVO extends Timestamp {

    @Id
    private int id;

    @Column(name="userId", nullable = false)
    private String userId;

    @Column(name = "userPw", nullable = false)
    private String userPw;

    @Column(name="name", nullable = false)
    private String name;

    @Column(name="email", nullable = true)
    private String email;

    private LocalDateTime created_at;