CREATE TABLE usuarios (
    id BIGINT NOT NULL AUTO_INCREMENT,
    correo VARCHAR(255) NOT NULL UNIQUE,
    contraseña VARCHAR(255) NOT NULL,
    rol VARCHAR(50) NOT NULL, -- (profesor, representante)

     PRIMARY KEY (id)
);

CREATE TABLE profesores (
    id BIGINT NOT NULL  AUTO_INCREMENT,
    id_usuario BIGINT NOT NULL UNIQUE, -- Relación uno a uno con Usuarios
    nombre VARCHAR(255) NOT NULL,
    apellido VARCHAR(255) NOT NULL,
    titulo VARCHAR(255),
    correo VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

CREATE TABLE representantes (
    id BIGINT NOT NULL  AUTO_INCREMENT,
    id_usuario BIGINT NOT NULL UNIQUE, -- Relación uno a uno con Usuarios
    nombre VARCHAR(255) NOT NULL,
    apellido VARCHAR(255) NOT NULL,
    correo VARCHAR(255),
    telefono VARCHAR(20),

    PRIMARY KEY (id),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

CREATE TABLE grados (
    id BIGINT NOT NULL  AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    seccion VARCHAR(10),

    PRIMARY KEY (id)
);

CREATE TABLE materias (
    id BIGINT NOT NULL  AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    id_grado BIGINT NOT NULL,
    id_profesor BIGINT NOT NULL,

    FOREIGN KEY (id_profesor) REFERENCES profesores(id),
    FOREIGN KEY (id_grado) REFERENCES grados(id),

    PRIMARY KEY (id)
);


CREATE TABLE estudiantes (
    id BIGINT NOT NULL  AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    apellido VARCHAR(255) NOT NULL,
    id_grado BIGINT NOT NULL,
    id_representante BIGINT NOT NULL,

    FOREIGN KEY (id_grado) REFERENCES grados(id),
    FOREIGN KEY (id_representante) REFERENCES representantes(id),

    PRIMARY KEY (id)
);

CREATE TABLE evaluaciones (
    id BIGINT NOT NULL  AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    fecha DATE,
    hora TIME,
    tema VARCHAR(255),
    observaciones TEXT,
    id_materia BIGINT NOT NULL,
    tipo_evaluacion VARCHAR(50), -- (examen, taller, proyecto, etc.)
--    id_grado BIGINT NOT NULL,

    FOREIGN KEY (id_materia) REFERENCES materias(id),
--    FOREIGN KEY (id_grado) REFERENCES grados(id),

    PRIMARY KEY (id)
);

CREATE TABLE Notas (
    id BIGINT NOT NULL  AUTO_INCREMENT,
    nota DECIMAL(5, 2), -- Permite notas decimales
    observacion TEXT,
    estado VARCHAR(50), -- (pendiente, completada, etc.)
    id_evaluacion BIGINT NOT NULL,
    id_estudiante BIGINT NOT NULL,
    fecha DATE,

    FOREIGN KEY (id_evaluacion) REFERENCES evaluaciones(id),
    FOREIGN KEY (id_estudiante) REFERENCES estudiantes(id),

    PRIMARY KEY (id)
);

