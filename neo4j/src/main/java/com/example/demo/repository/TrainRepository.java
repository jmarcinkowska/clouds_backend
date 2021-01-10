package com.example.demo.repository;

import com.example.demo.model.Train;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.neo4j.repository.query.Query;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;

public interface TrainRepository extends Neo4jRepository<Train, Long> {

    @Query("MATCH (u:Train)<-[r:STOPS]-(m:Station) RETURN u, r, m")
    List<Train> getAllTrains();

//    @Query("MATCH (n:`Train`) RETURN n")
    //List<Train> getTrainByNumber(Integer number);
}
