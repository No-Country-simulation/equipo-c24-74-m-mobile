package SkillSync.edu.domain.profesores;

import SkillSync.edu.domain.evaluaciones.Evaluacion;
import SkillSync.edu.domain.evaluaciones.EvaluacionRepository;
import SkillSync.edu.domain.grados.Grado;
import SkillSync.edu.domain.materias.Materia;
import SkillSync.edu.domain.materias.MateriaRepository;
import SkillSync.edu.domain.mensajes.Mensaje;
import SkillSync.edu.domain.mensajes.MensajeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProfesorService {

    @Autowired
    private ProfesorRepository profesorRepository;
    @Autowired
    private MateriaRepository materiaRepository;
    @Autowired
    private EvaluacionRepository evaluacionRepository;
    @Autowired
    private MensajeRepository mensajeRepository;


    // Agregar una materia a un profesor
    public Materia agregarMateria(Long profesorId, Materia materia) {
        // Validar que el profesorId no sea nulo
        if (profesorId == null) {
            throw new IllegalArgumentException("El ID del profesor no puede ser nulo");
        }

        // Asignar directamente el ID del profesor
        Profesor profesor = new Profesor();
        profesor.setId(profesorId);
        materia.setProfesor(profesor);

        // Validar y asociar el ID del grado
        if (materia.getGrado() != null && materia.getGrado().getId() != null) {
            Grado grado = new Grado();
            grado.setId(materia.getGrado().getId());
            materia.setGrado(grado);
        } else {
            throw new IllegalArgumentException("El ID del grado no puede ser nulo");
        }

        // Guardar la materia con los IDs asociados
        return materiaRepository.save(materia);
    }






    // Agregar una evaluación a una materia
    public Evaluacion crearEvaluacion(Long profesorId, Evaluacion evaluacion) {
        Profesor profesor = profesorRepository.findById(profesorId)
                .orElseThrow(() -> new RuntimeException("Profesor no encontrado"));
        evaluacion.setProfesor(profesor);
        return evaluacionRepository.save(evaluacion);
    }

    public Optional<Profesor> obtenerPorId(Long profesorId) {

        return profesorRepository.findById(profesorId);
    }

    //Enviar mensaje a un representante
    public Mensaje enviarMensaje(Mensaje mensaje) {
        return mensajeRepository.save(mensaje);
    }
}