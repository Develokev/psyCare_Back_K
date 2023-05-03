--DATABASE--
--TABLES TO CREATE--

--*ROLES TABLE--
CREATE TABLE roles ( --creates role table--
role_id serial PRIMARY KEY,
role varchar(10) NOT NULL
);

--*USERS TABLE--
CREATE TABLE users ( --creates users table (includes admin)--
user_id serial PRIMARY KEY,
role_id int,
name varchar(45) NOT NULL,
last_name varchar(45) NOT NULL,
phone 
email varchar(100) NOT NULL UNIQUE,
password varchar(25) NOT NULL,
avatar varchar(255) NOT NULL,
register_date date DEFAULT CURRENT_TIMESTAMP,
ORDER BY name ASC,
CONSTRAINT FK_roles
	FOREIGN KEY (role_id)
		REFERENCES roles(role_id)
);

--*APPOINTMENTS TABLE--
CREATE TABLE appointments (

appo_id serial PRIMARY KEY,
user_id int,
appoName varchar(100) NOT NULL,
appoDate varchar(25) NOT NULL,
appoTime varchar(25) NOT NULL,
register_date date DEFAULT CURRENT_TIMESTAMP,
ORDER BY register_date DESC,
CONSTRAINT FK_users
    FOREIGN KEY (user_id)
        REFERENCES users(user_id)
);

--*APPOINTMENT STATUS TABLE--
CREATE TABLE appoStatus (

status_id serial PRIMARY KEY,
appo_id int,
status varchar(25) NOT NULL,
CONSTRAINT FK_appointments
    FOREIGN KEY (appo_id)
        REFERENCES appointments(appo_id)
);

--*APPOINTMENT TYPE TABLE--
CREATE TABLE appoTypes (

appoType_id serial PRIMARY KEY,
appo_id int,
appoType varchar(25),
CONSTRAINT FK_appointments
    FOREIGN KEY (appo_id)
        REFERENCES appointments(appo_id)
);

--!TEST TABLE DATA FOR USERS--
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

--!TEST TABLE DATA FOR ROLES--
INSERT INTO roles (role)
    VALUES
    ('admin'),
    ('patient')

--!TEST TABLE DATA FOR APPOSTATUS--
INSERT INTO appoStatus (status)
    VALUES
	('pending'),
	('confirmed'),
	('paid'),
	('cancelled')

--!TEST TABLE DATA FOR APPOSTATUS--
INSERT INTO appoTypes (appoType)
    VALUES
    ('face-to-face'),
    ('on-line')

--!TEST TABLE DATA FOR APPOINTMENTS--
INSERT INTO appointments (

    appoName,
    appoDate,
    appoTime,

) VALUES
('Appointment for patient', 'Tuesday May 2nd', '10:00'),
('Appointment for patient', 'Tuesday May 2nd', '15:00'),
('Appointment for patient', 'Tuesday May 2nd', '18:00'),
('Appointment for patient', 'Thursday May 4th', '10:00'),
('Appointment for patient', 'Thursday May 4th', '15:00'),
('Appointment for patient', 'Thursday May 4th', '18:00'),
('Appointment for patient', 'Saturday May 6th', '15:00'),
('Appointment for patient', 'Saturday May 6th', '18:00')