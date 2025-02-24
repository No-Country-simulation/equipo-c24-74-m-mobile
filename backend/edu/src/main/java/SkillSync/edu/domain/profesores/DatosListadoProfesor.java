package SkillSync.edu.domain.profesores;

import SkillSync.edu.domain.usuarios.Usuario;
import jakarta.validation.constraints.NotBlank;

public record DatosListadoProfesor(Long idProfesor, String nombre, String apellido, String correo, String titulo) {
    public DatosListadoProfesor (Profesor profesor){
        this(profesor.getIdProfesor(), profesor.getNombre(), profesor.getApellido(), profesor.getCorreo(), profesor.getTitulo().toString());
    }
}


