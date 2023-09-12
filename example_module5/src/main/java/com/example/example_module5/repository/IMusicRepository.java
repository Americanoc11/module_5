package com.example.example_module5.repository;

import com.example.example_module5.model.Music;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;

@Transactional
public interface IMusicRepository extends JpaRepository<Music, Integer> {
    @Query(value = "select * from music", nativeQuery = true)
    Page<Music> getAllSongPagination(Pageable pageable);
}
