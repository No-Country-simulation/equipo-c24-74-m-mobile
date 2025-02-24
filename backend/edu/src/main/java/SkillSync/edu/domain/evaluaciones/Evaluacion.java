package SkillSync.edu.domain.evaluaciones;


import SkillSync.edu.domain.grados.Grado;
import SkillSync.edu.domain.materias.Materia;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "evaluaciones")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Evaluacion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nombre;

    private String fecha;
    private String hora;
    private String tema;
    private String observaciones;

    @ManyToOne
    @JoinColumn(name = "id_materia", nullable = false)
    private Materia materia;

    private String tipoEvaluacion;

    @ManyToOne
    @JoinColumn(name = "id_grado", nullable = false)
    private Grado grado;
}
