package SkillSync.edu.domain.representantes;

import SkillSync.edu.domain.estudiantes.Estudiante;
import SkillSync.edu.domain.estudiantes.EstudianteRepository;
import SkillSync.edu.domain.evaluaciones.Evaluacion;
import SkillSync.edu.domain.evaluaciones.EvaluacionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RepresentanteService {

    @Autowired
    private RepresentanteRepository representanteRepository;

    @Autowired
    private EstudianteRepository estudianteRepository;

    @Autowired
    private EvaluacionRepository evaluacionRepository;

    // Obtener estudiantes de un representante
    public List<Estudiante> obtenerEstudiantes(Long representanteId) {
        Representante representante = representanteRepository.findById(representanteId)
                .orElseThrow(() -> new RuntimeException("Representante no encontrado"));

        return representante.getEstudiantes();
    }

    // Obtener historial de evaluaciones de un estudiante
    public List<Evaluacion> obtenerHistorialEvaluaciones(Long estudianteId) {
        return List.of();
    }
}
