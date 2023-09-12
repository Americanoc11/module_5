package com.example.example_module5.service;

import com.example.example_module5.model.Status;

import java.util.List;

public interface IStatusService {
    List<Status> findAll();

    Object getById(int id);
}
