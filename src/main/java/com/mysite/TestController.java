package com.mysite;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by cavayman on 04.01.2017.
 */
@Controller
public class TestController {
@RequestMapping(path = "/home",method = RequestMethod.GET)
    public String getUser(){
   return "index.html";
}
@RequestMapping(path = "/",method = RequestMethod.GET)
    public String getUser(){
   return "index.html";
}

    @RequestMapping(path = "/learn",method = RequestMethod.GET)
    public String getAll(){
        return "index.html";
    }

}
