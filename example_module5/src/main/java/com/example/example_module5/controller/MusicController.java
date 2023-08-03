package com.example.example_module5.controller;

import com.example.example_module5.model.Music;
import com.example.example_module5.service.IMusicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/spotify")
public class MusicController {
    @Autowired
    private IMusicService musicService;
    @GetMapping()
    public ResponseEntity<?> getAll(){
        return new ResponseEntity<>(  musicService.findAll(), HttpStatus.OK);
    }
}
