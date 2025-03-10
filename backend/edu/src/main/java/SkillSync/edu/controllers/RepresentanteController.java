package SkillSync.edu.controllers;


import SkillSync.edu.domain.estudiantes.Estudiante;
import SkillSync.edu.domain.estudiantes.EstudianteRepository;
import SkillSync.edu.domain.evaluaciones.Evaluacion;
import SkillSync.edu.domain.representantes.Representante;
import SkillSync.edu.domain.representantes.RepresentanteRepository;
import SkillSync.edu.domain.representantes.RepresentanteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/representante")
public class RepresentanteController {

    @Autowired
    RepresentanteRepository representanteRepository;
    @Autowired
    EstudianteRepository estudianteRepository;
    @Autowired
    RepresentanteService representanteService;


    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/representado/{id}")
    public void mostrarRepresentado(@PathVariable Long id){
        Optional<Representante> representanteOptional = representanteRepository.findById(id);

        if(representanteOptional.isEmpty()){
            System.out.println("no hay ningun representante");
        }
        Representante  representante = representanteOptional.get();
    }

    // GET: Obtener historial de evaluaciones de un estudiante
    @GetMapping("/estudiantes/{estudianteId}/evaluaciones")
    public ResponseEntity<List<Evaluacion>> obtenerHistorialEvaluaciones(@PathVariable Long estudianteId) {
        List<Evaluacion> evaluaciones = representanteService.obtenerHistorialEvaluaciones(estudianteId);
        return ResponseEntity.ok(evaluaciones);
    }
}
