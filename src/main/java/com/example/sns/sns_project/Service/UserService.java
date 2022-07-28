package com.example.sns.sns_project.Service;

import com.example.sns.sns_project.domain.user.UserRepository;
import com.example.sns.sns_project.domain.user.UserRequestDto;
import com.example.sns.sns_project.domain.user.UserVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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


//    public List<UserVO> readUserAll(UserRequestDto userRequestDto){
//        return userRepository.logCheck(userRequestDto.getUser_id(),userRequestDto.getUser_pw());
//    }


}