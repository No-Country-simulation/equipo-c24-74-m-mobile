package SkillSync.edu.domain.usuarios;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;


import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {

    private final UsuarioRepository usuarioRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthService(UsuarioRepository usuarioRepository, PasswordEncoder passwordEncoder) {
        this.usuarioRepository = usuarioRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public Rol authenticateAndGetRole(String correo, String contraseña) {
        Optional<Usuario> userOptional = usuarioRepository.findByCorreo(correo);
        if (userOptional.isPresent()) {
            Usuario usuario = userOptional.get();
            if (passwordEncoder.matches(contraseña, usuario.getContraseña())) {
                return usuario.getRol(); // Devuelve el enum correspondiente
            }
        }

        return null; // Si las credenciales no coinciden
    }

}