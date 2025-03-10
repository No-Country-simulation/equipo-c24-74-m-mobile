package SkillSync.edu.domain.materias;


import SkillSync.edu.domain.grados.Grado;
import SkillSync.edu.domain.profesores.Profesor;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "materias")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Materia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nombre;

    private String descripcion;


//    @ManyToMany(mappedBy = "materias")
//    private List<Profesor> profesoresList;

//    @ManyToMany
//    @JoinTable(
//            name = "materias_grados",
//            joinColumns = @JoinColumn(name = "idMateria"),
//            inverseJoinColumns = @JoinColumn(name = "idGrado")
//    )
//    private List<Grado> gradosList;


    @ManyToOne
    @JoinColumn(name = "id_grado", nullable = false)
    private Grado grado;

    @ManyToOne
    @JoinColumn(name = "id_profesor", nullable= false)
    private Profesor profesor;


    public void setProfesor(Profesor profesor) {
        this.profesor = profesor;
    }
}