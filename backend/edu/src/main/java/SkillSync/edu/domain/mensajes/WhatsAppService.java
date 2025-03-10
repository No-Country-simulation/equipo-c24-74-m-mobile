package SkillSync.edu.domain.mensajes;

import org.springframework.http.*;
        import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class WhatsAppService {

    private final String apiUrl = "https://graph.facebook.com/v17.0/TU_ID_DE_TELEFONO/messages";
    private final String accessToken = "TU_ACCESS_TOKEN_TEMPORAL";

    public void enviarMensaje(String numero, String mensaje) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(accessToken);
        headers.setContentType(MediaType.APPLICATION_JSON);

        String requestBody = "{ \"messaging_product\": \"whatsapp\", \"to\": \"" + numero + "\", \"type\": \"text\", \"text\": { \"body\": \"" + mensaje + "\" } }";

        HttpEntity<String> entity = new HttpEntity<>(requestBody, headers);
        ResponseEntity<String> response = restTemplate.exchange(apiUrl, HttpMethod.POST, entity, String.class);

        System.out.println("Respuesta de WhatsApp API: " + response.getBody());
    }
}