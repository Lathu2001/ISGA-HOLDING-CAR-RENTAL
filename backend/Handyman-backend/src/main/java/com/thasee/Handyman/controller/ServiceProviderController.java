package com.thasee.Handyman.controller;

import org.springframework.http.HttpStatus;
import com.thasee.Handyman.model.AuthResponse;
import com.thasee.Handyman.model.ServiceProvider;
import com.thasee.Handyman.service.JwtService;
import com.thasee.Handyman.service.ServiceProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/sp")
@CrossOrigin("http://localhost:5173")
public class ServiceProviderController {
    @Autowired
    private ServiceProviderService serviceProviderService;

    @Autowired
    private JwtService jwtService;

    @GetMapping("/")
    public ResponseEntity<List<ServiceProvider>> getAllServiceProviders(){
        if (serviceProviderService.getAllServiceProviders() != null) {
            return ResponseEntity.ok().body(serviceProviderService.getAllServiceProviders());
        } else {
            throw new RuntimeException("No service providers found");
        }
    }

    @GetMapping("/city/{city}/service/{service}")
    public ResponseEntity<List<ServiceProvider>> getAllServiceProvidersByCityAndService(@PathVariable String city,@PathVariable String service){
        if (serviceProviderService.getAllServiceProvidersByCityAndService(city,service) != null) {
            return ResponseEntity.ok().body(serviceProviderService.getAllServiceProvidersByCityAndService(city,service));
        } else {
            throw new RuntimeException("No service providers found");
        }
    }

    @GetMapping("/service/{service}")
    public ResponseEntity<List<ServiceProvider>> getAllServiceProvidersByService(@PathVariable String service){
        if (serviceProviderService.getAllServiceProvidersByService(service) != null) {
            return ResponseEntity.ok().body(serviceProviderService.getAllServiceProvidersByService(service));
        } else {
            throw new RuntimeException("No service providers found");
        }
    }

    @GetMapping("/{nic}")
    public ResponseEntity<ServiceProvider> getServiceProviderByNIC(@PathVariable String nic){
        if (serviceProviderService.getServiceProviderByNIC(nic) != null) {
            return ResponseEntity.ok().body(serviceProviderService.getServiceProviderByNIC(nic));
        } else {
            throw new RuntimeException("Service provider not found with NIC: " + nic);
        }
    }

//    @PutMapping("/{nic}")
//    public ResponseEntity<ServiceProvider> updateServiceProvider(@PathVariable String nic,@RequestBody ServiceProvider serviceProvider){
//        serviceProvider.setNic(nic);
//        if (serviceProviderService.updateServiceProvider(serviceProvider) != null) {
//            return ResponseEntity.ok().body(serviceProviderService.updateServiceProvider(serviceProvider));
//        } else {
//            throw new RuntimeException("Service provider can not updated");
//        }
//    }
    @PutMapping("/{nic}")
    public ResponseEntity<ServiceProvider> updateServiceProvider(
            @PathVariable String nic,
            @RequestParam("firstname") String firstname,
            @RequestParam("lastname") String lastname,
            @RequestParam("email") String email,
            @RequestParam("password") String password,
            @RequestParam("phoneNumber") String phoneNumber,
            @RequestParam("address") String address,
            @RequestParam("city") String city,
            @RequestParam("service") String service,
            @RequestParam("price") double price,
            @RequestParam(value = "profileImage", required = false) MultipartFile profileImage) throws IOException {

        // Get existing service provider and update fields
        ServiceProvider serviceProvider = serviceProviderService.getServiceProviderByNIC(nic);
        if (serviceProvider == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }

        // Set the updated fields
        serviceProvider.setFirstname(firstname);
        serviceProvider.setLastname(lastname);
        serviceProvider.setEmail(email);
        serviceProvider.setPassword(password);
        serviceProvider.setPhoneNumber(phoneNumber);
        serviceProvider.setAddress(address);
        serviceProvider.setCity(city);
        serviceProvider.setService(service);
        serviceProvider.setPrice((int) price);

        // Handle the profile image upload
        if (profileImage != null && !profileImage.isEmpty()) {
            byte[] imageData = profileImage.getBytes(); // Convert image to byte array
            serviceProvider.setProfileImage(imageData);  // Assuming you store image as byte array in DB
        }

        // Update service provider
        ServiceProvider updatedServiceProvider = serviceProviderService.updateServiceProvider(serviceProvider);
        return ResponseEntity.ok().body(updatedServiceProvider);
    }

    @PostMapping("/")
    public ResponseEntity<AuthResponse> createServiceProvider(@RequestBody ServiceProvider serviceProvider){
        if (serviceProviderService.getServiceProviderByNIC(serviceProvider.getNic()) != null) {
            throw new RuntimeException("Instructor already exist");
        }
       else if ((serviceProviderService.createServiceProvider(serviceProvider) != null) && serviceProvider.getNic()!=null){
           String token = jwtService.generateToken(serviceProvider.getNic(), "INST");
           AuthResponse authResponse = new AuthResponse(token, serviceProvider.getNic(), "INST");
           authResponse.setSuccess(true);
           authResponse.setMessage("User created and Authenticated");
           return ResponseEntity.ok(authResponse);
       } else {
           throw new RuntimeException("Instructor not created");
       }
    }

    @DeleteMapping("/{nic}")
    public ResponseEntity<String> deleteServiceProvider(@PathVariable String nic){
        Optional<ServiceProvider> serviceProvider = Optional.ofNullable(serviceProviderService.getServiceProviderByNIC(nic));
        if ( serviceProvider.isPresent()) {
            serviceProviderService.deleteServiceProvider(nic);
            return ResponseEntity.ok().body("Service provider deleted");
        } else {
            throw new RuntimeException("Service provider not found with NIC: " + nic);
        }
    }
}
