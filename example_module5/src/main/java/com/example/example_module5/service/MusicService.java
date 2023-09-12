package com.example.example_module5.service;

import com.example.example_module5.model.Music;
import com.example.example_module5.repository.IMusicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MusicService implements IMusicService{
    @Autowired
    private IMusicRepository musicRepository;


    @Override
    public List<Music> findAll() {
        return musicRepository.findAll();
    }

    @Override
    public Music createMusic(Music music) {
        return musicRepository.save(music);
    }

    @Override
    public Music findById(Integer id) {
        return musicRepository.findById(id).orElseThrow(()-> new IllegalArgumentException("Invalid id: "+id));
    }

    @Override
    public void delete(Integer id) {
        Music music=findById(id);
        if (exitsById(id)){
            musicRepository.delete(music);
        }
    }

    @Override
    public void update(Music music) {
musicRepository.save(music);
    }

    @Override
    public boolean exitsById(Integer id) {
        return musicRepository.existsById(id);
    }

    @Override
    public Page<Music> getListPagination(Pageable pageable) {
        return musicRepository.getAllSongPagination(pageable);
    }


}
