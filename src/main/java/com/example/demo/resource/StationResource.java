package com.example.demo.resource;

import com.example.demo.model.Station;
import com.example.demo.service.StationService;
import com.sun.org.apache.xpath.internal.operations.Bool;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/station")
@CrossOrigin("https://train-station-project.herokuapp.com/")
public class StationResource {

    @Autowired
    StationService stationService;

    @GetMapping
    public Collection<Station> getAll(){
        return stationService.getAll();
    }

//    @GetMapping("/search/{city}")
//    public List<Station> getStationBy(@PathVariable("city") String city) {
//        return stationService.getStationBy(city);
//    }

    @GetMapping("/{id}")
    public ResponseEntity<Station> getStationId(@PathVariable Long id){
        return stationService.getStationId(id);
    }

    @GetMapping("/trains/{id}")
    public ResponseEntity<Station> getTrainId(@PathVariable Long id) {return stationService.getStationId(id);}

    @PostMapping("")
    public Station createStation(@RequestBody Station station){
        return stationService.createStation(station);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Station> updateStation(@PathVariable Long id, @RequestBody Station station){
        return stationService.updateStation(id,station);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteStation(@PathVariable Long id){
        return stationService.deleteStation(id);
    }

    @GetMapping("/connections/{id}")
    public List<Station> getConnections(String id){
        return stationService.getConnections(id);
    }

//    @GetMapping("/1/{id}")
//    public  ResponseEntity<Station> All(Long id){
//
//    }
}
