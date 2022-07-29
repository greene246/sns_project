package com.example.sns.sns_project.service;

import com.example.sns.sns_project.domain.UserRepository;
import com.example.sns.sns_project.domain.UserRequestDto;
import com.example.sns.sns_project.domain.UserVO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public UserVO readUser(String id ) {
        UserVO user = userRepository.findById(id).orElseThrow(
                () -> new IllegalArgumentException("dd")
        );
        return user;
    }

    // read_PW
    public UserVO readUserId(UserRequestDto userRequestDto){
        UserVO result = userRepository.findById(userRequestDto.getUser_id()).orElseThrow(
                () -> new IllegalArgumentException("존재하지 않는 사용자입니다.")
        );

        return result;
    }

    // update
    @Transactional
    public boolean updateUser(UserRequestDto userRequestDto){
        UserVO user = userRepository.findById(userRequestDto.getUser_id()).orElseThrow(
                () -> new IllegalArgumentException("아이디 찾기 실패 업데이트 실패")
        );
//        UserVO user = new UserVO(userRequestDto);

        user.update(userRequestDto);
        return true;
    }


}
