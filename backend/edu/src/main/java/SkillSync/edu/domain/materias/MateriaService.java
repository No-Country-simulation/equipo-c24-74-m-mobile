package SkillSync.edu.domain.materias;

import SkillSync.edu.domain.evaluaciones.Evaluacion;
import SkillSync.edu.domain.evaluaciones.EvaluacionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MateriaService {

    @Autowired
    private MateriaRepository materiaRepository;

    @Autowired
    private EvaluacionRepository evaluacionRepository;

    public Evaluacion agregarEvaluacion(Long materiaId, Evaluacion evaluacion) {
        // Buscar la materia en la base de datos
        Materia materia = materiaRepository.findById(materiaId)
                .orElseThrow(() -> new RuntimeException("Materia no encontrada con ID: " + materiaId));

        // Asociar la materia a la evaluación
        evaluacion.setMateria(materia);

        // Guardar la evaluación en la base de datos
        return evaluacionRepository.save(evaluacion);
    }
}

