package SkillSync.edu.controllers;

import SkillSync.edu.domain.materias.DatosRespuestanuevaMateria;
import SkillSync.edu.domain.evaluaciones.Evaluacion;
import SkillSync.edu.domain.evaluaciones.EvaluacionRepository;
import SkillSync.edu.domain.materias.DatosRespuestanuevaMateria;
import SkillSync.edu.domain.materias.Materia;
import SkillSync.edu.domain.mensajes.Mensaje;
import SkillSync.edu.domain.profesores.*;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.Optional;

@RestController
@RequestMapping("/profesores")

public class ProfesorController {

    @Autowired
    private ProfesorService profesorService;
    @Autowired
    private EvaluacionRepository evaluacionRepository;


    // Agregar una materia a un profesor
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/{profesorId}/materias")
    public ResponseEntity<DatosRespuestanuevaMateria> agregarMateria(@PathVariable Long profesorId, @RequestBody Materia materia) {
        // Pasamos solo el ID del profesor y la Materia al servicio
        //System.out.println(profesorId);
        Materia nuevaMateria = profesorService.agregarMateria(profesorId, materia);
        DatosRespuestanuevaMateria datosRespuestanuevaMateria = new DatosRespuestanuevaMateria(nuevaMateria.getNombre(), nuevaMateria.getDescripcion());

        return ResponseEntity.status(HttpStatus.CREATED).body(datosRespuestanuevaMateria);
    }

//    @CrossOrigin(origins = "*", allowedHeaders = "*")
//    @PostMapping("/{profesorId}/materias")
//    public ResponseEntity<Materia> agregarMateria(@PathVariable Long profesorId, @RequestBody Materia materia) {
//        Materia nuevaMateria = profesorService.agregarMateria(profesorId, materia);
//        return ResponseEntity.status(HttpStatus.CREATED).body(nuevaMateria);
//    }

//    // Gestionar evaluaciones
//    @CrossOrigin(origins = "*", allowedHeaders = "*")
//    @PostMapping("/{profesorId}/evaluaciones")
//    public ResponseEntity<Evaluacion> crearEvaluacion(@PathVariable Long profesorId, @RequestBody Evaluacion evaluacion) {
//        // Buscar el profesor en la base de datos
//        Optional<Profesor> profesorOpt = profesorService.obtenerPorId(profesorId);
//
//        if (profesorOpt.isEmpty()) {
//            return ResponseEntity.notFound().build();  // Retorna 404 si no encuentra el profesor
//        }
//        Evaluacion nuevaEvaluacion = profesorService.crearEvaluacion(profesorId, evaluacion);
//        return ResponseEntity.status(HttpStatus.CREATED).body(nuevaEvaluacion);
//    }


    // Enviar mensaje a representante
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/mensajes")
    public ResponseEntity<Mensaje> enviarMensaje(@RequestBody Mensaje mensaje) {
        Mensaje nuevoMensaje = profesorService.enviarMensaje(mensaje);
        return ResponseEntity.status(HttpStatus.CREATED).body(nuevoMensaje);
    }

    // Obtener un profesor por ID
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/{profesorId}")
    public ResponseEntity<Profesor> obtenerProfesorPorId(@PathVariable Long profesorId) {
        Optional<Profesor> profesor = profesorService.obtenerPorId(profesorId);
        return profesor.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

}