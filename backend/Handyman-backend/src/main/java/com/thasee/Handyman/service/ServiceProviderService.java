package com.thasee.Handyman.service;

import com.thasee.Handyman.model.Request;
import com.thasee.Handyman.model.ServiceProvider;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ServiceProviderService {
    List<ServiceProvider> getAllServiceProviders();

    List <ServiceProvider> getAllServiceProvidersByCityAndService(String city, String service);

    List <ServiceProvider> getAllServiceProvidersByService(String service);

    ServiceProvider getServiceProviderByNIC(String nic);

    ServiceProvider createServiceProvider(ServiceProvider serviceProvider);

    ServiceProvider updateServiceProvider(ServiceProvider serviceProvider);

    void deleteServiceProvider(String nic);

    List<Request> getAllRequests(String nic);
}
