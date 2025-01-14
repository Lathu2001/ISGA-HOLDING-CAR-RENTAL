package com.thasee.Handyman.model;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class EmailRequest {
    // Getters and setters
    private String email;
    private String subject;
    private String message;

}