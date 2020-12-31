package com.wfh.coordinator.repository;

import com.wfh.coordinator.model.Event;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface EventRepository extends MongoRepository<Event, Integer> {

}
