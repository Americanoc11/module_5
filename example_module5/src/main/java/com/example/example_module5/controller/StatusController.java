package com.example.example_module5.controller;

import com.example.example_module5.model.Music;
import com.example.example_module5.service.IStatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin

@RequestMapping("/statuses")
public class StatusController {
    @Autowired
    private IStatusService statusService;
    @GetMapping()
    public ResponseEntity<?> getALl(){
        return  new ResponseEntity<>(statusService.findAll(), HttpStatus.OK  );
    }
    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable int id) {
        return new ResponseEntity<>(statusService.getById(id), HttpStatus.ACCEPTED);
    }

}
