package com.example.example_module5.service;

import com.example.example_module5.model.Music;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Collection;
import java.util.List;

public interface IMusicService {
    List<Music> findAll();
    Music createMusic(Music music);
    Music findById(Integer id);
    void delete(Integer id);
    void update(Music music);
    boolean exitsById(Integer id);

    Page<Music> getListPagination(Pageable pageable);
}
