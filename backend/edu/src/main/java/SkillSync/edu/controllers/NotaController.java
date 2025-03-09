package SkillSync.edu.controllers;

import SkillSync.edu.domain.estudiantes.EstudianteRepository;
import SkillSync.edu.domain.notas.Nota;
import SkillSync.edu.domain.notas.NotaRepository;
import SkillSync.edu.domain.notas.NotaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/nota")
public class NotaController {

    private final NotaService notaService;

    public NotaController(NotaService notaService) {
        this.notaService = notaService;
    }

    @PostMapping("/{idEvaluacion}/{idEstudiante}/crearNota")
    public ResponseEntity<?> crearNota(@PathVariable Long idEvaluacion,
                                       @PathVariable Long idEstudiante,
                                       @RequestBody Nota nota) {
        try {
            // Llamar al servicio para asignar la nota
            notaService.asignarNota(idEstudiante, idEvaluacion, nota.getNota());
            return ResponseEntity.ok(Map.of("message", "Nota asignada exitosamente"));
        } catch (Exception e) {
            return ResponseEntity.status(400).body(Map.of("error", "Error al asignar nota: " + e.getMessage()));
        }
    }
}
