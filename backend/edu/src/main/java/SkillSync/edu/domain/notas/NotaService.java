package SkillSync.edu.domain.notas;

import SkillSync.edu.domain.estudiantes.EstudianteRepository;
import SkillSync.edu.domain.evaluaciones.EvaluacionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NotaService {

    @Autowired
    private final EstudianteRepository estudianteRepository;
    @Autowired
    private final EvaluacionRepository evaluacionRepository;
    @Autowired
    private final NotaRepository notaRepository;

    public NotaService(EstudianteRepository estudianteRepository, EvaluacionRepository evaluacionRepository, NotaRepository notaRepository) {
        this.estudianteRepository = estudianteRepository;
        this.evaluacionRepository = evaluacionRepository;
        this.notaRepository = notaRepository;
    }

    public void asignarNota(Long idEstudiante, Long idEvaluacion, Double nota) {
        // Verificar que el estudiante exista
        var estudiante = estudianteRepository.findById(idEstudiante)
                .orElseThrow(() -> new RuntimeException("Estudiante no encontrado"));

        // Verificar que la evaluación exista
        var evaluacion = evaluacionRepository.findById(idEvaluacion)
                .orElseThrow(() -> new RuntimeException("Evaluación no encontrada"));

        // Guardar la nota
        Nota nuevaNota = new Nota();
        nuevaNota.setEstudiante(estudiante);
        nuevaNota.setEvaluacion(evaluacion);
        nuevaNota.setNota(nota);

        notaRepository.save(nuevaNota);
    }
}

