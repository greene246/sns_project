package com.example.sns.sns_project.service;

import com.example.sns.sns_project.domain.UserRepository;
import com.example.sns.sns_project.domain.UserRequestDto;
import com.example.sns.sns_project.domain.UserVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // read_PW
    public UserVO readUserPw(UserRequestDto userRequestDto){
        UserVO result = userRepository.findById(userRequestDto.getUser_id()).orElseThrow(
                () -> new IllegalArgumentException("존재하지 않는 사용자입니다.")
        );
        return result;
    }

    // read
    public UserVO readUser(String id) {
        UserVO user = userRepository.findById(id).orElse(null);
        return user;
    }

    // update
    @Transactional
    public void updateUser(UserRequestDto userRequestDto){
        UserVO user = new UserVO(userRequestDto);
        user.update(userRequestDto);
    }


}
