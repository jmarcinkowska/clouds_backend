package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.neo4j.ogm.annotation.GraphId;
import org.neo4j.ogm.annotation.NodeEntity;
import org.neo4j.ogm.annotation.Relationship;
import org.springframework.data.neo4j.core.schema.GeneratedValue;
import org.springframework.data.neo4j.core.schema.Id;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import static org.neo4j.ogm.annotation.Relationship.INCOMING;
import static org.neo4j.ogm.annotation.Relationship.OUTGOING;

@NodeEntity
public class Station {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String city;

    @Relationship(type = "STOPS", direction = INCOMING)
    private Set<Train> trains;

    public Set<Train> getTrains(){
        return trains;
    }

    public Station() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }
}

//@NodeEntity
//@Data
//@AllArgsConstructor
//@NoArgsConstructor
//public class Station {
//
//    @Id
//    @GeneratedValue
//    private Long entityId;
//    private String city;
//    private String name;
//
//    @Relationship(type = "STOPS", direction = Relationship.INCOMING)
//    private Set<Train> trains;
//}
