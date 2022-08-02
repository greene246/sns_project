package com.example.sns.sns_project.service;

import com.example.sns.sns_project.domain.BoardRepository;
import com.example.sns.sns_project.domain.BoardRequestDto;
import com.example.sns.sns_project.domain.BoardVO;
import com.example.sns.sns_project.domain.UserVO;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Random;
import java.util.function.Function;

@RequiredArgsConstructor
@Service
public class BoardService {
    @Autowired
    private BoardRepository boardRepository;

    // 1. Create
    public void createBoard(BoardRequestDto boardRequestDto){
        BoardVO board = new BoardVO(boardRequestDto);
        boardRepository.save(board);
    }

    // 컨텐츠 DB 탐색색
   public List<BoardVO> search(int a){

        List<BoardVO> boards = boardRepository.findBoardsByPublicScopeOrderByCreatedAtDesc(a);

        for(int i = 0; i < boards.size(); i++) {
            System.out.print(boards.get(i).getId()+" ");
           System.out.println(boards.get(i).getUser_id());
        }
        System.out.println("=========================================");
        return boards;
    }
    //컨텐츠 랜덤 코드 부여
    public int createContents_id(){
        List<BoardVO> boardVOList = boardRepository.findAll();

        Random ran = new Random();

        int r_c_id;
        while(true){
            r_c_id = ran.nextInt(9999)+1;
            for(int j=0; j<boardVOList.size(); j++) {
                if(r_c_id == boardVOList.get(j).getContents_id()){
                    break;
                }
            }
            break;
        }
        return r_c_id;
    }

}














