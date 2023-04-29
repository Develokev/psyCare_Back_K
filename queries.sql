--DATABASE--
--TABLES TO CREATE--

CREATE TABLE roles ( --creates role table--
role_id serial PRIMARY KEY,
role varchar(10) NOT NULL
);

CREATE TABLE users ( --creates users table (includes admin)--
user_id serial PRIMARY KEY,
role_id int,
name varchar(45) NOT NULL,
last_name varchar(45) NOT NULL,
email varchar(100) NOT NULL UNIQUE,
password varchar(25) NOT NULL,
avatar varchar(255) NOT NULL,
register_date date DEFAULT CURRENT_TIMESTAMP,
CONSTRAINT FK_roles
	FOREIGN KEY (role_id)
		REFERENCES roles(role_id)
);

--TEST TABLE DATA FOR USERS--
INSERT INTO users (

    role,
    name,
    last_name,
    email,
    password,
    avatar

) VALUES
('1','Paloma','Apellido','paloma@correo.es','adminpaloma','https://randomuser.me/api/portraits/thumb/women/75.jpg'),
('2','Kevin','Escobar','kevin@correo.es','contraseñafacil','https://randomuser.me/api/portraits/thumb/men/74.jpg'),
('2','Andrés','Leon','andres@correo.es','contraseñafacil','https://randomuser.me/api/portraits/thumb/men/78.jpg'),
('2','María','Almazan','maria@correo.es','contraseñafacil','https://randomuser.me/api/portraits/thumb/women/76.jpg'),
('2','Marcos','Delgado','barneto@correo.es','contraseñafacil','https://randomuser.me/api/portraits/thumb/men/77.jpg'),
('2','Esther','Roncalla','mesterc@correo.es','contraseñafacil','https://randomuser.me/api/portraits/thumb/women/73.jpg')