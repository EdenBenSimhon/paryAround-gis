package com.example.demo.model;


import lombok.*;
import nonapi.io.github.classgraph.json.Id;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.stereotype.Component;

import javax.annotation.processing.Generated;
import java.io.Serializable;
@Getter
@Setter
@ToString
@Document(collection = "users")

public class User {

    // primary key

    private String name;
    private String email;
    private String password;

}
