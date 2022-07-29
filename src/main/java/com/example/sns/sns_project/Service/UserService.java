package com.example.sns.sns_project.Service;

import com.example.sns.sns_project.domain.UserRepository;
import com.example.sns.sns_project.domain.UserRequestDto;
import com.example.sns.sns_project.domain.UserVO;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class UserService {


    @Autowired
    private UserRepository userRepository;

    public UserVO readUserId(String id ) {
        UserVO user = userRepository.findById(id).orElse(null);

        System.out.println("asdasd"+user.getUser_id());
        return user;

//        UserVO user = userRepository.findById(id).orElseThrow(
//                () -> new IllegalArgumentException("dd")
//        );
//        return user;
    }

    public UserVO readUser(UserRequestDto userRequestDto) {
        System.out.println("28 : "+userRequestDto.getUser_id());
        UserVO result = userRepository.findById(userRequestDto.getUser_id()).orElseThrow(
                () -> new IllegalArgumentException("존재하지 않는 사용자입니다.")
        );
        if(result.getUser_id().equals(userRequestDto.getUser_id())){

            return result;

        }
        return null;
    }



    public UserVO createUser(UserRequestDto userRequestDto){
        UserVO user = new UserVO(userRequestDto);
        return  userRepository.save(user);

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
    @Transactional
    public void deleteUser(UserRequestDto userRequestDto){
        UserVO user = new UserVO(userRequestDto);
        userRepository.deleteById(user.getUser_id());

    }





}
