package SkillSync.edu.domain.mensajes;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public class MensajeDTO {
    private Long profesorId;
    private Long representanteId;
    private String contenido;
    private String medio; // "EMAIL" o "WHATSAPP"


}