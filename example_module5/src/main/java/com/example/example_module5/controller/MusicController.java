package com.example.example_module5.controller;

import com.example.example_module5.dto.MusicDTO;
import com.example.example_module5.model.Music;
import com.example.example_module5.service.IMusicService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/spotify")
public class MusicController {
    @Autowired
    private IMusicService musicService;

    @GetMapping()
    public ResponseEntity<?> getAll() {
        return new ResponseEntity<>(musicService.findAll(), HttpStatus.OK);
    }

    @ResponseBody
    @PostMapping("")
    public ResponseEntity<?> createSong(@Valid @RequestBody MusicDTO musicDTO, BindingResult bindingResult) {
        System.out.println(musicDTO.toString());
        if (bindingResult.hasErrors()) {
            System.out.println(bindingResult);
            Map<String, String> errors = new HashMap<>();
            for (FieldError error : bindingResult.getFieldErrors()) {
                errors.put(error.getField(), error.getDefaultMessage());
            }
            return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
        } else {
            Music music = new Music();
            BeanUtils.copyProperties(musicDTO, music);
            musicService.createMusic(music);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable("id") Integer id) {
        return new ResponseEntity<>(musicService.findById(id), HttpStatus.OK);
    }

    @PutMapping("/")
    public ResponseEntity<?> editSong(@RequestBody Music music) {
        musicService.update(music);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteSong(@PathVariable("id") Integer id) {
        musicService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{page}/{limit}")
    public ResponseEntity<?> getSongPagination(@PathVariable int page, @PathVariable int limit) {
        Pageable pageable = PageRequest.of(page, limit);
        if (musicService.getListPagination(pageable).isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(musicService.getListPagination(pageable), HttpStatus.ACCEPTED);
    }
}
