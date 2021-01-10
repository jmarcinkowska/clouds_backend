package com.example.demo.resource;

import com.example.demo.model.Train;
import com.example.demo.service.TrainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("/train")
@CrossOrigin(origins = "http://localhost:3000")
public class TrainResource {

    @Autowired
    TrainService trainService;

    @GetMapping
    public List<Train> getAll(){
        return trainService.getAllTrains();
    }

//    @GetMapping("/search/{number}")
//    List<Train> getTrainBy(@PathVariable("number") Integer number) {
//        return trainService.getTrainBy(number);
//    }
}

