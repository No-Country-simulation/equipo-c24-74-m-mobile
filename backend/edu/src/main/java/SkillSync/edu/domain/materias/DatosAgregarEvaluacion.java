package SkillSync.edu.domain.materias;

import java.time.LocalDate;
import java.time.LocalTime;

public record DatosAgregarEvaluacion(
         String nombre,
         LocalDate fecha,
         String nombreMateria) {

}
