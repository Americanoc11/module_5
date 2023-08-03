package com.example.example_module5.service;

import com.example.example_module5.repository.IStatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StatusService implements IStatusService{
    @Autowired
    private IStatusRepository statusRepository;
}
