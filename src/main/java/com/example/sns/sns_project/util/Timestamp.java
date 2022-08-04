package com.example.sns.sns_project.util;

import lombok.Getter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;
@Getter
@MappedSuperclass // 나를 상속받은 자식클래스에게 멤버변수를 컬럼으로 부여함
@EntityListeners(AuditingEntityListener.class) // - 실시간으로 테이블 변화를 지켜봄
public class Timestamp {
    @CreatedDate
    private LocalDateTime createdAt;

    @LastModifiedDate
    private LocalDateTime modifiedAt;

}
