package com.example.demo.repository;

import com.example.demo.model.Station;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.neo4j.repository.query.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;

@Repository
public interface StationRepository extends Neo4jRepository<Station, Long> {

    @Query("MATCH p=(s:Station)-[r:TRAINS]->(t:Train) RETURN p")
    Collection<Station> getTrainById(Long id);

    @Query("match (s:Station), (s2:Station) where id(s)=$id and  (s)-[:CONNECTED]-(s2) return s2, s")
    List<Station> getConnecteStations(@Param("id") Long id);

    @Query("MATCH (s:Station) where s.city=~$entityId RETURN s")
    List<Station> All(@Param("entityId") String id);

//    @Query("MATCH (m:Station) RETURN m")
//    Collection<Station> getAllStations();

//    @Query("MATCH (n:`Station`) RETURN n")
//    List<Station> getStationByCity(String city);
//
//    Station getStationById(Long id);
}
