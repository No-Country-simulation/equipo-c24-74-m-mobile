package SkillSync.edu.domain.estudiantes;


import SkillSync.edu.domain.grados.Grado;
import SkillSync.edu.domain.representantes.Representante;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "estudiantes")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Estudiante {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nombre;

    @Column(nullable = false)
    private String apellido;

    @ManyToOne
    @JoinColumn(name = "id_grado", nullable = false)
    private Grado grado;

    @ManyToOne
    @JoinColumn(name = "id_representante", nullable = false)
    private Representante representante;

    public Estudiante(DatosRegistroEstudiante datosRegistroEstudiante) {
        this.nombre = datosRegistroEstudiante.nombre();
        this.apellido = datosRegistroEstudiante.apellido();

    }

    public void actualizarEstudiante(DatosActualizarEstudiante datos) {
        if (datos.nombre() != null) {
            this.nombre = datos.nombre();
        }
        if (datos.apellido() != null) {
            this.apellido = datos.apellido();
        }
    }

}