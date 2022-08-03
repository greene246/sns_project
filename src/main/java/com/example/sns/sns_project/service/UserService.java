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

    // id 찾기
    public UserVO readUserId(String id) {
        UserVO user = userRepository.findById(id).orElse(null);
        return user;
    }

    // read_PW
    public UserVO readUser(UserRequestDto userRequestDto){
        UserVO result = userRepository.findById(userRequestDto.getUser_id()).orElseThrow(
                () -> new IllegalArgumentException("존재하지 않는 사용자입니다.")
        );

        return result;
    }

    // 회원가입
    public UserVO createUser(UserRequestDto userRequestDto){
        UserVO user = new UserVO(userRequestDto);
        return  userRepository.save(user);

    }

    // 회원탈퇴 id, pw 검증
    public UserVO checkUser(UserRequestDto userRequestDto){
        UserVO result = userRepository.findById(userRequestDto.getUser_id()).orElseThrow(
                () -> new IllegalArgumentException("아이디 찾기 실패")
        );
        if(result.getUser_id().equals(userRequestDto.getUser_id()) &&
                result.getUser_pw().equals(userRequestDto.getUser_pw())){
            return result;
        }
        return null;
    }

    // 회원탈퇴
    @Transactional
    public void deleteUser(UserRequestDto userRequestDto){
        UserVO user = new UserVO(userRequestDto);
        userRepository.deleteById(user.getUser_id());

    }

    // update
    @Transactional
    public boolean updateUser(UserRequestDto userRequestDto){
        UserVO user = userRepository.findById(userRequestDto.getUser_id()).orElseThrow(
                () -> new IllegalArgumentException("아이디 찾기 실패 업데이트 실패")
        );

        user.update(userRequestDto);
        return true;
    }
    //    @Transactional
    public String findThumbnailById(String id){


        return userRepository.findThumbnailById(id);
    }

}