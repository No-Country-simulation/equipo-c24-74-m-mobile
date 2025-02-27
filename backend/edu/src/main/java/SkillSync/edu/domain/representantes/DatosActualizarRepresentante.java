package SkillSync.edu.domain.representantes;

import jakarta.validation.constraints.NotNull;

public record DatosActualizarRepresentante(
        @NotNull
        Long idRepresentante,
        String nombre,
        String apellido,
        String telefono
) {
}
