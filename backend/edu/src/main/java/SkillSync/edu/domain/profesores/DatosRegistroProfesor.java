package SkillSync.edu.domain.profesores;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;


public record DatosRegistroProfesor(
        @NotBlank
        String usuario,
        @NotBlank
        String nombre,
        @NotBlank
        String apellido,
        @NotBlank
        @Email
        String correo,
        @NotNull
        Titulo titulo
) {

}
