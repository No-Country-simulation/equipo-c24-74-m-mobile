package SkillSync.edu.domain.estudiantes;

import jakarta.validation.constraints.NotNull;

public record DatosActualizarEstudiante(
        @NotNull
        Long idEstudiante,
        String nombre,
        String apellido
) {
}
