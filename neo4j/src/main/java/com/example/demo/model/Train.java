package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.neo4j.ogm.annotation.GraphId;
import org.neo4j.ogm.annotation.NodeEntity;
import org.neo4j.ogm.annotation.Relationship;
import org.springframework.data.neo4j.core.schema.GeneratedValue;
import org.springframework.data.neo4j.core.schema.Id;

import java.util.ArrayList;
import java.util.List;

import static org.neo4j.ogm.annotation.Relationship.*;

@NodeEntity
@EqualsAndHashCode(exclude = "id")
public class Train {

    @Id
    @GeneratedValue
    private Long id;
    private String number;


    public String getNumberOfCarriages() {
        return numberOfCarriages;
    }

    public void setNumberOfCarriages(String numberOfCarriages) {
        this.numberOfCarriages = numberOfCarriages;
    }

    private String numberOfCarriages;


//    List<Station> stations = new ArrayList<>();
//
//    public List<Station> getStations(){
//        System.out.println(stations);
//        return stations;
//    }
//
//    public void setStations(List<Station> stations) {
//        this.stations = stations;
//    }

    public Train(){

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }
}



//@NodeEntity
//@Data
//@AllArgsConstructor
//@NoArgsConstructor
//@EqualsAndHashCode(exclude = "id")
//public class Train {
//
//    @Id
//    @GeneratedValue
//    private Long id;
//    private String number;
//    private String numberOfCarriages;
//
//}