package SkillSync.edu.domain.profesores;

import jakarta.validation.constraints.NotNull;

public record DatosActualizarProfesor(
        @NotNull Long idProfesor,
        String nombre,
        String apellido) {
}
