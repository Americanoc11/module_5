package com.example.example_module5.dto;

import com.example.example_module5.model.Status;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;
import org.springframework.validation.annotation.Validated;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import java.lang.annotation.Annotation;

public class MusicDTO implements Validator {
    private Integer id;
    @NotNull
    private String name;
    @NotNull
    private String author;
    @NotNull
    private String singer;
    private Integer likes;
    @NotNull
    private String time;
    @ManyToOne
    private Status status;

    public MusicDTO() {
    }

    public MusicDTO(Integer id, String name, String author, String singer, Integer likes, String time, Status status) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.singer = singer;
        this.likes = likes;
        this.time = time;
        this.status = status;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getSinger() {
        return singer;
    }

    public void setSinger(String singer) {
        this.singer = singer;
    }

    public Integer getLikes() {
        return likes;
    }

    public void setLikes(Integer likes) {
        this.likes = likes;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "MusicDTO{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", author='" + author + '\'' +
                ", singer='" + singer + '\'' +
                ", likes=" + likes +
                ", time='" + time + '\'' +
                ", status=" + status +
                '}';
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {

    }
}
