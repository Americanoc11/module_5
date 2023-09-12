package com.example.example_module5.model;

import javax.persistence.*;

@Entity
@Table(name = "music")
public class Music {
    @Id
    @GeneratedValue
    private Integer id;
    private String name;
    private String author;
    private String singer;
    private Integer likes;
    private String time;
    @ManyToOne
    @JoinColumn(name = "status_id", nullable = false)
    private Status status;

    public Music() {
    }

    public Music(Integer id, String name, String author, String singer, Integer likes, String time, Status status) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.singer = singer;
        this.likes = likes;
        this.time = time;
        this.status = status;
    }

    public Integer getLikes() {
        return likes;
    }

    public void setLikes(Integer likes) {
        this.likes = likes;
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
}
