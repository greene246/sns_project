package com.example.sns.sns_project.domain;

import com.example.sns.sns_project.util.Timestamp;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name="coments")
@Entity
public class ComentVO extends Timestamp {
    @Id
    private int id;
}
