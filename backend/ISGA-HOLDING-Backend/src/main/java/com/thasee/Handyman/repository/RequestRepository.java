package com.thasee.Handyman.repository;

import com.thasee.Handyman.model.Request;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RequestRepository extends MongoRepository<Request, String> {
    Request findByReqId(String reqId);
    Optional<List<Request>> findAllByServiceProvider(String serviceProvider);
    Optional<List<Request>> findAllByUser(String user);
}