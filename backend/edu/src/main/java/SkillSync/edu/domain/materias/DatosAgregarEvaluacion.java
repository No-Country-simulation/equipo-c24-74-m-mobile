package SkillSync.edu.domain.materias;

import java.time.LocalDate;
import java.time.LocalTime;

public record DatosAgregarEvaluacion(
         String nombre,
         LocalDate fecha,
         LocalTime hora,
         String tema,
         String observaciones,
         String nombreMateria) {

}
