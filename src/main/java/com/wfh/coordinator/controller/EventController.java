package com.wfh.coordinator.controller;

import java.util.List;
import java.util.Optional;

import com.wfh.coordinator.model.Event;
import com.wfh.coordinator.repository.EventRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class EventController {

    @Autowired
    private EventRepository repository;

    @PostMapping("/addEvent")
    public String saveEvent(@RequestBody Event event) {
        repository.save(event);
        return "Added event with id: " + event.getId();
    }

    @GetMapping("/getAllEvents")
    public List<Event> getEvents() {
        return repository.findAll();
    }

    @GetMapping("/getEvent/{id}")
    public Optional<Event> getEvent(@PathVariable int id) {
        return repository.findById(id);
    }

    @DeleteMapping("/deleteEvent/{id}")
    public String deleteEvent(@PathVariable int id) {
        repository.deleteById(id);
        return "Event deleted with id: " + id;
    }
}
