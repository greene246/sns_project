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

    // read
    /*public UserVO readUser(UserRequestDto userRequestDto){
        UserVO result = userRepository.findBy(userRequestDto.)
    }*/

    // update
    @Transactional
    public void updateUser(UserRequestDto userRequestDto){
        UserVO user = new UserVO(userRequestDto);
        user.update(userRequestDto);
    }


}
