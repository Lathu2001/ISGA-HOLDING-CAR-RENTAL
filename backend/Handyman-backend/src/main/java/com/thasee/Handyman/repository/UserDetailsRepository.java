package com.thasee.Handyman.repository;

import com.thasee.Handyman.model.UserDetails;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDetailsRepository extends MongoRepository<UserDetails, String> {
    UserDetails findByUsername(String username);
}
