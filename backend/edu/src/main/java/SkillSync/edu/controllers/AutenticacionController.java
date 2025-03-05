package SkillSync.edu.controllers;


import SkillSync.edu.domain.usuarios.AuthService;
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
        boolean isAuthenticated = authService.authenticate(credentials.get("correo"), credentials.get("contraseña"));

        if (isAuthenticated) {
            return ResponseEntity.ok(Map.of("message", "Inicio de sesión exitoso"));
        } else {
            return ResponseEntity.status(401).body(Map.of("error", "Credenciales incorrectas"));
        }
    }
}