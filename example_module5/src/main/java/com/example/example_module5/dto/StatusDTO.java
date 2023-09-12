package com.example.example_module5.dto;

import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

public class StatusDTO implements Validator {
    private Integer id;

    private String name;

    public StatusDTO() {
    }

    public StatusDTO(Integer id, String name) {
        this.id = id;
        this.name = name;
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

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {

    }
}
