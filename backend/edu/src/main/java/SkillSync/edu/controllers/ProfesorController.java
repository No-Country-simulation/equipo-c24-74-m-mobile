package SkillSync.edu.controllers;

import SkillSync.edu.domain.profesores.DatosRegistroProfesor;
import SkillSync.edu.domain.profesores.DatosRespuestaProfesor;
import SkillSync.edu.domain.profesores.Profesor;
import SkillSync.edu.domain.profesores.ProfesorRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("/profesores")

public class ProfesorController {

    @Autowired
    private ProfesorRepository profesorRepository;

    @PostMapping
    public ResponseEntity<DatosRespuestaProfesor> registrarProfesor(@RequestBody @Valid DatosRegistroProfesor datosRegistroMedico,
                                                                    UriComponentsBuilder uriComponentsBuilder) {
        Profesor profesor = profesorRepository.save(new Profesor(datosRegistroMedico));
        DatosRespuestaProfesor datosRespuestaProfesor = new DatosRespuestaProfesor(profesor.getIdProfesor(), 
                profesor.getNombre(), profesor.getApellido(), profesor.getCorreo(), profesor.getTitulo().toString());


        URI url = uriComponentsBuilder.path("/profesores/{id}").buildAndExpand(profesor.getIdProfesor()).toUri();
        DatosRespuestaProfesor datosRespuestaprofesor = null;
        return ResponseEntity.created(url).body(datosRespuestaprofesor);

    }
}