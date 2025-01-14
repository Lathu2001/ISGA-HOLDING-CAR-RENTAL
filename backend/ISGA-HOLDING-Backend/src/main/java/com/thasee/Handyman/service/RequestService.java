package com.thasee.Handyman.service;

import com.thasee.Handyman.model.Request;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface RequestService {
    List<Request> getAllRequestsByServiceProvider(String serviceProvider);
    List<Request> getAllRequestsByUser(String user);
    Request createRequest(Request request);
    Request updateRequest(Request request);
    Request getRequestById(String reqId);
    void deleteRequest(String reqId);
}
