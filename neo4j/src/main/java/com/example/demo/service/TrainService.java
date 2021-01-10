package com.example.demo.service;

import com.example.demo.model.Train;
import com.example.demo.repository.TrainRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;

@Service
public class TrainService {

    @Autowired
    TrainRepository trainRepository;

    public List<Train> getAll() {
        return trainRepository.getAllTrains();
    }

    public List<Train> getAllTrains() {
        return trainRepository.findAll();
    }

//    public List<Train> getTrainBy(Integer number){
//        return trainRepository.getTrainByNumber(number);
//    }
}
