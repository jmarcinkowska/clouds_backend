package com.example.demo.service;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Station;
import com.example.demo.repository.StationRepository;
import com.sun.org.apache.xpath.internal.operations.Bool;
import org.neo4j.ogm.exception.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class StationService {

    @Autowired
    StationRepository stationRepository;

    public Collection<Station> getAll() {
        return stationRepository.findAll();
    }

//    public List<Station> getStationBy(String city){
//        return stationRepository.getStationByCity(city);
//    }

    public ResponseEntity<Station> getStationId(Long id){
        Station station = stationRepository.findById(id)
                .orElseThrow(()  -> new ResourceNotFoundException("Nie istnieje podana stacja"));
        return ResponseEntity.ok(station);
    }

    public Station createStation(Station station){return stationRepository.save(station);}

    public ResponseEntity<Station> updateStation(Long id, Station station){
        Station stationS = stationRepository.findById(id)
                .orElseThrow(()  -> new ResourceNotFoundException("Nie istnieje podana stacja"));

        stationS.setName(station.getName());
        stationS.setCity(station.getCity());

        Station updatedStation = stationRepository.save(stationS);
        return ResponseEntity.ok(updatedStation);
    }

    public ResponseEntity<Map<String, Boolean>> deleteStation(@PathVariable Long id){
        Station station = stationRepository.findById(id)
                .orElseThrow(()  -> new ResourceNotFoundException("Nie istnieje podana stacja"));

        stationRepository.delete(station);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", true);
        return ResponseEntity.ok(response);
    }

    public List<Station> getConnections(String id) {
        return stationRepository.All(id);
    }

//    public Collection<Station> getTrainId(Long id) {
//        return stationRepository.findById(id);
//    }
}
