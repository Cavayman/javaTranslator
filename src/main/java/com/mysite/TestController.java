package com.mysite;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

/**
 * Created by cavayman on 04.01.2017.
 */
@RestController
public class TestController {
@RequestMapping(path = "/user",method = RequestMethod.GET)
    public String getUser(){

   return "hi, from user";
}
}
