package SkillSync.edu.domain.representantes;


import SkillSync.edu.domain.profesores.DatosRegistroProfesor;
import SkillSync.edu.domain.usuarios.Usuario;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity(name = "Representante")
@Table(name = "representantes")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Representante {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "id_usuario", unique = true, nullable = false)
    private Usuario usuario;

    @Column(nullable = false)
    private String nombre;

    @Column(nullable = false)
    private String apellido;

    private String correo;
    private String telefono;

    public Representante(DatosRegistroRepresentante datos) {
        this.nombre = datos.nombre();
        this.apellido = datos.apellido();
        this.correo = datos.correo();
        this.telefono = datos.telefono();
    }

    public void actualizarinformaciones(DatosActualizarRepresentante datos) {
        if (datos.nombre() != null) {
            this.nombre = datos.nombre();
        }
        if (datos.apellido() != null) {
            this.apellido = datos.apellido();
        }
        if (datos.telefono() != null) {
            this.telefono = datos.telefono();
        }
    }

    public Long obteerId(){
        Long miId = this.getId();
        return miId;
    }
}
