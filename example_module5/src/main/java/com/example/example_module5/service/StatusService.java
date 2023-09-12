package com.example.example_module5.service;

import com.example.example_module5.model.Status;
import com.example.example_module5.repository.IStatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StatusService implements IStatusService{
    @Autowired
    private IStatusRepository statusRepository;


    @Override
    public List<Status> findAll() {
        return statusRepository.findAll();
    }

    @Override
    public Object getById(int id) {
        return statusRepository.findById(id).orElseThrow(()-> new IllegalArgumentException("Invalid Id: "+id));
    }
}
