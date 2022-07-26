package com.example.sns.sns_project.Service;

import com.example.sns.sns_project.domain.user.UserRepository;
import com.example.sns.sns_project.domain.user.UserRequestDto;
import com.example.sns.sns_project.domain.user.UserVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
        private UserRepository userRepository;

        public UserVO readUser(UserRequestDto userRequestDto) {
            UserVO result = userRepository.findById(userRequestDto.getUserId()).orElseThrow(
                    () -> new IllegalArgumentException("존재하지 않는 사용자입니다.")
            );
            if(result.getUserId().equals(userRequestDto.getUserId()))
            return result;
        return null;
    }
}
