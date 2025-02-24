package SkillSync.edu.domain.profesores;

public record DatosRespuestaProfesor(
        Long idProfesor,
        String usuario,
        String nombre,
        String apellido,
        String correo
) {
}
