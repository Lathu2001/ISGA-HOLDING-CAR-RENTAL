package com.thasee.Handyman.repository;

import com.thasee.Handyman.model.ServiceProvider;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ServiceProviderRepository extends MongoRepository<ServiceProvider, String> {

    Optional<List<ServiceProvider>> findByCityAndService(String city, String service);

    Optional<List<ServiceProvider>> findByService(String service);
    ServiceProvider findByNic(String nic);
    void deleteByNic(String nic);
}
