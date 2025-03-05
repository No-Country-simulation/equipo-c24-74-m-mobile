package SkillSync.edu.controllers;


import SkillSync.edu.domain.estudiantes.Estudiante;
import SkillSync.edu.domain.estudiantes.EstudianteRepository;
import SkillSync.edu.domain.representantes.Representante;
import SkillSync.edu.domain.representantes.RepresentanteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/representante")
public class RepresentanteController {

    @Autowired
    RepresentanteRepository representanteRepository;
    @Autowired
    EstudianteRepository estudianteRepository;

    
    @GetMapping("/representado/{id}")
    public List<Estudiante> mostrarRepresentado(@PathVariable Long id){
        Optional<Representante> representanteOptional = representanteRepository.findById(id);

        if(representanteOptional.isEmpty()){
            System.out.println("no hay ningun representante");
        }
        Representante  representante = representanteOptional.get();
        

    }
}
