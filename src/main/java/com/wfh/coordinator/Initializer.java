package com.wfh.coordinator;

import com.wfh.coordinator.model.Event;
import com.wfh.coordinator.model.Group;
import com.wfh.coordinator.model.GroupRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.util.Collections;
import java.util.stream.Stream;

@Component
public class Initializer implements CommandLineRunner {

    private final GroupRepository repository;

    public Initializer(GroupRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) {
        Stream.of("jaMald", "minMald", "danMald").forEach(name -> repository.save(new Group(name)));

        Group minGroup = repository.findByName("minMald");

        Event e = Event.builder().title("Full Stack Reactive").description("Reactive with Spring Boot + React")
                .date(Instant.parse("2020-11-14T20:00:00.000Z")).build();

        minGroup.setEvents(Collections.singleton(e));
        repository.save(minGroup);

        repository.findAll().forEach(System.out::println);

    }
}
