package SkillSync.edu.domain.estudiantes;

import jakarta.validation.constraints.NotBlank;

public record DatosRegistroEstudiante(
        @NotBlank
        String nombre,
        @NotBlank
        String apellido,
        @NotBlank
        String grado,
        @NotBlank
        String representante
) {
}
