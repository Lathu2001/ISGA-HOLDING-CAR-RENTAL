package com.thasee.Handyman.repository;

import com.thasee.Handyman.model.Service;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ServiceRepository extends MongoRepository<Service, String> {
    Service findServiceByServiceType(String serviceType);
    @Query("{'serviceType': ?0}")
    Optional<String> findAllServiceType();
}
