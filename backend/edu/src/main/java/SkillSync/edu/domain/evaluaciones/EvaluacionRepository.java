package SkillSync.edu.domain.evaluaciones;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface EvaluacionRepository extends JpaRepository<Evaluacion, Long> {
}