package SkillSync.edu.domain.representantes;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record DatosRegistroRepresentante(
        @NotBlank
        String usuario,
        @NotBlank
        String nombre,
        @NotBlank
        String apellido,
        @NotBlank
        @Email
        String correo,
        @NotBlank
        String telefono
) {
}
