package com.example.demo;

import com.example.demo.model.User;
import com.example.demo.Repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
public class AppController {

    @Autowired
    private UserRepository repo;

    @GetMapping("/")
    public String welcome() {
        return "index";
    }
    @GetMapping("/login")
    public String loginPage() {
        return "login";
    }

    @GetMapping("/register")
    public String register(){
        return "register";

    }
    @RequestMapping("/afterRegister")
    public String login(@ModelAttribute User user , BindingResult result , Model model) {
        if (user.getEmail() == "") {
            return "error";
        }
        List<User> userList = repo.findAll();
        for (User tempUser : userList)
        {
            if (tempUser.getEmail().equals(user.getEmail()) ){
                System.out.println(tempUser);
                return "error";
            }
        }
        User userInserted = this.repo.save(user);
        return "login";



    }
    @RequestMapping("/prayaroundmap")
    public String map(@ModelAttribute User user , BindingResult result,Model model) {

        System.out.println(user.getEmail());
        if(user.getEmail() == "") {

            return "error";
        }
        List<User> userList = repo.findAll();
        for (User tempUser : userList)
        {
            if (tempUser.getEmail().equals(user.getEmail()) ){
                if (tempUser.getPassword().equals(user.getPassword())) {
                    return "prayAround";
                }
            }
        }


        return "error";


    }

}
