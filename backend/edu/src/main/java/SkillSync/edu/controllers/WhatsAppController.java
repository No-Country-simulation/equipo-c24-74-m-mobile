package SkillSync.edu.controllers;


import SkillSync.edu.domain.mensajes.WhatsAppService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/whatsapp")
public class WhatsAppController {

    private final WhatsAppService whatsappService;

    public WhatsAppController(WhatsAppService whatsappService) {
        this.whatsappService = whatsappService;
    }

    @PostMapping("/enviar")
    public String enviarMensaje(@RequestParam String numero, @RequestParam String mensaje) {
        whatsappService.enviarMensaje(numero, mensaje);
        return "Mensaje enviado con éxito a " + numero;
    }
}