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
    public UserVO readUserId(String user_id) {
        List<UserVO> user = userRepository.findAll();

        for(int i=0; i<user.size(); i++) {
            if(user_id.equals(user.get(i).getUser_id()))
                return user.get(i);
        }
        return null;
    }

    public UserVO findName(String name) {
        List<UserVO> user = userRepository.findAll();

        for(int i=0; i<user.size(); i++) {
            if(user.get(i).getName().equals(name))
                return user.get(i);
        }
        return null;
    }

    // 회원가입
    public UserVO createUser(UserRequestDto userRequestDto){
        UserVO user = new UserVO(userRequestDto);
        return userRepository.save(user);
    }

    // 회원탈퇴 id, pw 검증
    public UserVO checkUser(UserRequestDto userRequestDto){
        List<UserVO> user = userRepository.findAll();

        for(int i=0; i<user.size(); i++) {
            if(userRequestDto.getUser_id().equals(user.get(i).getUser_id()) &&
                    userRequestDto.getUser_pw().equals(user.get(i).getUser_pw())) {
                return user.get(i);
            }
        }
        return null;
    }

    // 회원탈퇴
    @Transactional
    public void deleteUser(UserVO userVO){
        userRepository.deleteById(userVO.getId());
    }

    // update
    @Transactional
    public boolean updateUser(UserRequestDto userRequestDto) {
        List<UserVO> user = userRepository.findAll();

        for(int i=0; i<user.size(); i++) {
            if(userRequestDto.getUser_id().equals(user.get(i).getUser_id())) {
                user.get(i).update(userRequestDto);
                return true;
            }
        }
        return false;
    }

    /*public UserVO readLog(int log){
        UserVO user = userRepository.findById(log).orElseThrow(
                () -> new IllegalArgumentException("존재하지않는 사용자입니다.")
        );
        System.out.println(user.getUser_id());
        System.out.println(user.getThumbnail());
        return user;
    }*/

    // read
    public UserVO readUser(UserRequestDto userRequestDto){
        List<UserVO> user = userRepository.findAll();

        for(int i=0; i<user.size(); i++) {
            if(userRequestDto.getUser_id().equals(user.get(i).getUser_id())){
                return user.get(i);
            }
        }
        return null;
    }

    // read_Pw
    public UserVO readUserPw(UserRequestDto userRequestDto){
        List<UserVO> user = userRepository.findAll();

        for(int i=0; i<user.size(); i++) {
            if(userRequestDto.getUser_id().equals(user.get(i).getUser_id()) &&
                    userRequestDto.getUser_pw().equals(user.get(i).getUser_pw())) {
                return user.get(i);
            }
        }
        return null;
    }

    @Transactional
    public UserVO readLog(int log){
        UserVO user = userRepository.findById(log).orElseThrow(
                () -> new IllegalArgumentException("존재하지않는 사용자입니다.")
        );

        return user;
    }

    //    @Transactional
    public String findThumbnailById(String id){
        return userRepository.findThumbnailById(id);
    }

}