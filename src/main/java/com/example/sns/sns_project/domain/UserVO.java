package com.example.sns.sns_project.domain;

import com.example.sns.sns_project.util.Timestamp;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import org.apache.catalina.User;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@AllArgsConstructor // 모든 멤버값을 받는다.
@NoArgsConstructor //기본 생성자
@Getter
@Entity   // JPA
@Table(name="users")
public class UserVO {

    @Id  // 프라이머리 키라는 의미
    private String id;
    // @NonNull
    @Column(name="pw", nullable = false)
    private String pw;

    @Column(name="name", nullable = false)
    private String name;

    public void setName(String name){
        this.name = name;
    }
    public UserVO(UserRequestDto userRequestDto){
        this.id = userRequestDto.getId();
        this.pw = userRequestDto.getPw();
        this.name = userRequestDto.getName();
    }


    //    public void setName(String name){
//        this.name = name;
//    }
    //setter를 쓰지 않고, RequestDto 객체를 파라미터로 받는 update() 메소드 생성
    public void update(UserRequestDto userRequestDto){
        this.name = userRequestDto.getName();

    }

}
