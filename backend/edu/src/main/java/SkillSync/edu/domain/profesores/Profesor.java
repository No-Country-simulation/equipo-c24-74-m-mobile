package SkillSync.edu.domain.profesores;


import SkillSync.edu.domain.materias.Materia;
import SkillSync.edu.domain.usuarios.Usuario;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

import java.util.List;

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
    private Long id;

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
    @ManyToMany
    @JoinTable(
            name = "profesores_materias",
            joinColumns = @JoinColumn(name = "profesor_id"),
            inverseJoinColumns = @JoinColumn(name = "materia_id")
    )
    private List<Materia> materias;

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