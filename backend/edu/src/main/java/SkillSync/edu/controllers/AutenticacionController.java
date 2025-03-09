package SkillSync.edu.controllers;


import SkillSync.edu.domain.usuarios.AuthService;
import SkillSync.edu.domain.usuarios.Rol;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/skillsyncedu")

public class AutenticacionController {

    private final AuthService authService;

    public AutenticacionController(AuthService authService) {
        this.authService = authService;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> credentials) {
        Rol rol = authService.authenticateAndGetRole(credentials.get("email"), credentials.get("password"));

        if (rol != null) {
            return ResponseEntity.ok(Map.of("rol", rol)); // Devuelve el rol en caso de éxito
        } else {
            return ResponseEntity.status(401).body(Map.of("error", "Credenciales incorrectas")); // Error si las credenciales fallan

        }
    }
}