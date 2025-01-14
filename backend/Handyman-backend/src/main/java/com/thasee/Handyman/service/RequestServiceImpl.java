package com.thasee.Handyman.service;

import com.thasee.Handyman.model.Request;
import com.thasee.Handyman.repository.RequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.thasee.Handyman.service.EmailService;

import java.util.List;
import java.util.Optional;

@Service
public class RequestServiceImpl implements RequestService {

    @Autowired
    private RequestRepository requestRepository;

    @Autowired
    private EmailService emailService;



    public void someMethod(Request request) {
        String subject = "Request Update";
        String emailBody = "Your request has been processed.";

        // Using emailService to send an email
        emailService.sendEmail(request.getUser(), subject, emailBody);
    }

    @Override
    public List<Request> getAllRequestsByServiceProvider(String serviceProvider) {
        Optional<Optional<List<Request>>> requestDb = Optional.ofNullable(this.requestRepository.findAllByServiceProvider(serviceProvider));
        if(requestDb.isPresent()){
            return requestDb.get().get();
        }else {
            return null;
        }
    }

    @Override
    public List<Request> getAllRequestsByUser(String user) {
        Optional<Optional<List<Request>>> requestDb = Optional.ofNullable(this.requestRepository.findAllByUser(user));
        if(requestDb.isPresent()){
            return requestDb.get().get();
        }else {
            return null;
        }
    }

    @Override
    public Request createRequest(Request request) {
        requestRepository.save(request);
        return request;
    }

    @Override
    public Request updateRequest(Request request) {
        Optional<Request> requestDb = Optional.ofNullable(this.requestRepository.findByReqId(request.getReqId()));
        if(requestDb.isPresent()){
            Request requestUpdate = requestDb.get();
//            requestUpdate.setReqId(request.getReqId()!=null ? request.getReqId() : requestUpdate.getReqId());
//            requestUpdate.setServiceProvider(request.getServiceProvider()!=null ? request.getServiceProvider() : requestUpdate.getServiceProvider());
//            requestUpdate.setUser(request.getUser()!=null ? request.getUser() : requestUpdate.getUser());
//            requestUpdate.setServiceType(request.getServiceType()!=null ? request.getServiceType() : requestUpdate.getServiceType());
            requestUpdate.setDate(request.getDate()!=null ? request.getDate() : requestUpdate.getDate());
            requestUpdate.setStatus(request.getStatus()!=null ? request.getStatus() : requestUpdate.getStatus());
            requestUpdate.setServiceDescription(request.getServiceDescription()!=null ? request.getServiceDescription() : requestUpdate.getServiceDescription());
//            requestUpdate.setSpContactNo(request.getSpContactNo()!=null ? request.getSpContactNo() : requestUpdate.getSpContactNo());
//            requestUpdate.setUserContactNo(request.getUserContactNo()!=null ? request.getUserContactNo() : requestUpdate.getUserContactNo());
            requestRepository.save(requestUpdate);
            return requestUpdate;
        }else {
            return null;
        }
    }

    @Override
    public Request getRequestById(String reqId) {
        Optional<Request> requestDb = Optional.ofNullable(this.requestRepository.findByReqId(reqId));
        if(requestDb.isPresent()){
            return requestDb.get();
        }else {
            return null;
        }
    }

    @Override
    public void deleteRequest(String reqId) {
        Optional<Request> requestDb = Optional.ofNullable(this.requestRepository.findByReqId(reqId));
        if(requestDb.isPresent()){
            requestRepository.delete(requestDb.get());
        }
    }
}