package SkillSync.edu.domain.estudiantes;

import SkillSync.edu.domain.grados.Grado;
import SkillSync.edu.domain.representantes.Representante;

public record DatosListadoEstudiante(
        Long idEstudiante, String nombre, String apellido, Grado grado, Representante representante) {
    public DatosListadoEstudiante(Estudiante estudiante) {
        this(estudiante.getIdEstudiante(), estudiante.getNombre(), estudiante.getApellido(), estudiante.getGrado(), estudiante.getRepresentante());
    }
}
