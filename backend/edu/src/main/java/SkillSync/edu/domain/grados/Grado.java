package SkillSync.edu.domain.grados;


import SkillSync.edu.domain.materias.Materia;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "grados")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Grado {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nombre;

    private String seccion;

    @ManyToMany(mappedBy = "gradosList")
    private List<Materia> materiasList;
}