package SkillSync.edu.infra.security;



import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration
//@EnableWebSecurity
public class SecurityConfigurations {

    //@Bean
    //public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
     //   http
    //            .cors(cors -> cors.configurationSource(corsConfigurationSource())) // Configura CORS
    //            .csrf(csrf -> csrf.disable()) // Deshabilita CSRF (para pruebas)
     //           .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)) // API sin sesiones
     //           .authorizeHttpRequests(auth -> auth
    //                    .requestMatchers("/skillsyncedu/login/**").permitAll() // Endpoints públicos (ej. login, registro)
    //                    .requestMatchers("/skillsyncedu/profesores/**").authenticated() // Rutas protegidas
    //                    .requestMatchers("/skillsyncedu/representantes/**").authenticated()
    //                    .anyRequest().authenticated()
     //           );

    //    return http.build();
   // }

   // @Bean
   // public CorsConfigurationSource corsConfigurationSource() {
   //     CorsConfiguration configuration = new CorsConfiguration();
  //      configuration.setAllowedOrigins(List.of("http://localhost:5173")); // URL del frontend
  //      configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
  //      configuration.setAllowedHeaders(List.of("Authorization", "Content-Type"));

  //      UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
  //      source.registerCorsConfiguration("/**", configuration);
  //      return (CorsConfigurationSource) source;
  //  }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    //@Bean
    //public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
    //    return authConfig.getAuthenticationManager();
    //}
}

