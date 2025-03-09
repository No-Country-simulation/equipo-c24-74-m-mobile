package SkillSync.edu.domain.evaluaciones;



import SkillSync.edu.domain.materias.Materia;
import SkillSync.edu.domain.profesores.Profesor;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

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
    private LocalDate fecha;
//    private LocalTime hora;
//    private String tema;
//    private String observaciones;

    @ManyToOne
    @JoinColumn(name = "id_materia", nullable = false)
    private Materia materia;

//    @Column(name = "tipo_evaluacion")
//    private String tipoEvaluacion;

//    @ManyToOne
//    @JoinColumn(name = "id_grado", nullable = false)
//    private Grado grado;


    public void setProfesor(Profesor profesor) {
    }

    public void setMateria(Materia materia) {
        this.materia = materia;
    }

}
