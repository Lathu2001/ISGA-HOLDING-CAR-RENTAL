package com.thasee.Handyman.controller;

import com.thasee.Handyman.service.EmailService;
import com.thasee.Handyman.model.EmailRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/mail")
@CrossOrigin("http://localhost:5173")
public class EmailController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/sendEmail")
    public String sendEmail(@RequestBody EmailRequest emailRequest) {
        emailService.sendEmail(emailRequest.getEmail(), emailRequest.getSubject(), emailRequest.getMessage());
        return "Successfully sent mail";
    }
}