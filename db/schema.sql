DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS employee;

CREATE TABLE department(
    id integer auto_increment primary key,
    name varchar(30) not null
);

CREATE TABLE role(
    id integer auto_increment primary key,
    title varchar(30) not null,
    salary DECIMAL(5,2) not null,
    department_id integer not null
);

CREATE TABLE employee(
    id integer auto_increment primary key,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    role_id integer not null,
    manager_id integer
);