package SkillSync.edu.domain.profesores;


import SkillSync.edu.domain.usuarios.Usuario;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Entity(name = "profesor")
@Table(name = "profesores")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Profesor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idProfesor;

    @OneToOne
    @JoinColumn(name = "id_usuario", unique = true, nullable = false)
    private @NotBlank Usuario usuario;

    @Column(nullable = false)
    private String nombre;
    @Column(nullable = false)
    private String apellido;
    private String correo;
    @Enumerated(EnumType.STRING)
    private Titulo titulo;

    public Profesor(DatosRegistroProfesor datosRegistroProfesor) {

        this.nombre = datosRegistroProfesor.nombre();
        this.apellido = datosRegistroProfesor.apellido();
        this.correo = datosRegistroProfesor.correo();
        this.titulo = datosRegistroProfesor.titulo();
    }
    public void actualizarDatos(DatosActualizarProfesor datosActualizarProfesor) {
        if (datosActualizarProfesor.nombre() != null) {
            this.nombre = datosActualizarProfesor.nombre();
        }
        if (datosActualizarProfesor.apellido() != null) {
            this.apellido = datosActualizarProfesor.apellido();
        }
    }
}