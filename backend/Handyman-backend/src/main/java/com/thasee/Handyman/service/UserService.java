package com.thasee.Handyman.service;

import com.thasee.Handyman.model.Request;
import com.thasee.Handyman.model.User;

import java.util.List;


public interface UserService {
    User getUserByUsername(String username);
    List<User> getAllUsers();
    User createUser(User user);
    User updateUser(User user);
    void deleteUser(String username);
    void addRequest(String username, int reqId);
    List<Request> getAllRequests(String username);
}
