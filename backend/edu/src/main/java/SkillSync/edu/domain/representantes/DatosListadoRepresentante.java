package SkillSync.edu.domain.representantes;

public record DatosListadoRepresentante(Long idRepresentante, String nombre, String apellido, String correo) {
    public DatosListadoRepresentante(Representante representante) {
        this(representante.getIdRepresentante(), representante.getNombre(), representante.getApellido(), representante.getCorreo());
    }
}
