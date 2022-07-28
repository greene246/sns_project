package com.example.sns.sns_project.service;

import com.example.sns.sns_project.domain.user.UserRepository;
import com.example.sns.sns_project.domain.user.UserRequestDto;
import com.example.sns.sns_project.domain.user.UserVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // CRUD
    // 1. create
    public UserVO readUser(String id) {
        UserVO user = userRepository.findById(id).orElseThrow(
                () -> new IllegalArgumentException("회원이 존재하지 않습니다.")
        );
        return user;
    }

    public UserVO createUser(UserRequestDto userRequestDto){
        //   UserVO user = new UserVO(userRequestDto);
        return userRepository.save(new UserVO(userRequestDto));
    }
    // 2. read
    public UserVO readUser(UserRequestDto userRequestDto){

        UserVO user = userRepository.findById(userRequestDto.getUser_id()).orElseThrow(
                () -> new IllegalArgumentException("존재하지 않는 사용자입니다.")
        );

        if(user != null)
            return user;

        return null;

    }
    // 3. update
    @Transactional // <- 조회된 객체를 업데이트
    public void updateUser(UserRequestDto userRequestDto){
        //     UserVO user = readUser(userRequestDto); //아이디만 동일
        //    user.update(userRequestDto);

        UserVO user = userRepository.findById(userRequestDto.getUser_id()).orElseThrow(
                () -> new IllegalArgumentException("존재하지 않는")
        );
        user.update(userRequestDto);

    }
    // 4. delete
    public void deleteUser(UserRequestDto userRequestDto){
        userRepository.deleteById(userRequestDto.getUser_id());
    }



}
