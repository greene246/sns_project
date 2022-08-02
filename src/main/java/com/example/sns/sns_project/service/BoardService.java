package com.example.sns.sns_project.service;

import com.example.sns.sns_project.domain.BoardRepository;
import com.example.sns.sns_project.domain.BoardRequestDto;
import com.example.sns.sns_project.domain.BoardVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Random;

@Service
public class BoardService {
    @Autowired
    private BoardRepository boardRepository;

    // 1. Create
    public void createBoard(BoardRequestDto boardRequestDto){
        BoardVO board = new BoardVO(boardRequestDto);
        boardRepository.save(board);
        int id = board.getId();
        System.out.println("BoardService save img id : "+id);
    }

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

    @Transactional
    public void deleteBoard(int id){
        boardRepository.deleteById(id);
    }
}
