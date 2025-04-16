package com.EDSalmoxarifado.controllers;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/produto")
public class ProdutoController {


    @GetMapping
    public String teste() {
        return "Edvaldo TESTE";
    }

}
