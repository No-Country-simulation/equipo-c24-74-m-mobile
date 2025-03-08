package SkillSync.edu.controllers;


import SkillSync.edu.domain.evaluaciones.Evaluacion;
import SkillSync.edu.domain.evaluaciones.EvaluacionRepository;
import SkillSync.edu.domain.materias.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/materia")
public class MateriaController {

    @Autowired
    private MateriaRepository materiaRepository;
    @Autowired
    private EvaluacionRepository evaluacionRepository;
    @Autowired
    MateriaService materiaService;

    @PostMapping("{idMateria}/crearEvaluacion")
    public ResponseEntity<DatosAgregarEvaluacion> crearEvaluacion(@PathVariable Long idMateria, @RequestBody Evaluacion evaluacion){

        Evaluacion nuevaEvaluacion = materiaService.agregarEvaluacion(idMateria, evaluacion);

        DatosAgregarEvaluacion datosAgregarEvaluacion= new DatosAgregarEvaluacion(nuevaEvaluacion.getNombre(), nuevaEvaluacion.getFecha(),
                                                                                    nuevaEvaluacion.getHora(), nuevaEvaluacion.getTema(),
                                                                                    nuevaEvaluacion.getObservaciones(), nuevaEvaluacion.getMateria().getNombre());
        return ResponseEntity.status(HttpStatus.CREATED).body(datosAgregarEvaluacion);
    }
}
