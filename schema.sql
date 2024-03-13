
CREATE TABLE locations (
    location_id INTEGER PRIMARY KEY AUTOINCREMENT,
    location_name VARCHAR(255) NOT NULL
);

INSERT INTO locations (location_name) VALUES 
('London, UK'), 
('Paris, France'), 
('Berlin, Germany'), 
('Lagos, Nigeria'), 
('Nairobi, Kenya'), 
('Cairo, Egypt'), 
('New York, NY'), 
('San Francisco, CA'), 
('Chicago, IL');


CREATE TABLE departments (
    department_id INTEGER PRIMARY KEY AUTOINCREMENT,
    department_name VARCHAR(255) NOT NULL
);

INSERT INTO departments (department_name) VALUES 
('Software Engineering'), 
('Product Management'), 
('Information Technology (IT)'), 
('Quality Assurance (QA)'), 
('User Experience (UX)/User Interface (UI) Design'), 
('Sales and Marketing'), 
('Human Resources (HR)'), 
('Customer Support'), 
('Research and Development (R&D)'), 
('Finance and Accounting');


CREATE TABLE employees (
    employee_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255) NOT NULL,
    position VARCHAR(255) NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    join_date DATE NOT NULL,
    location_id INTEGER REFERENCES locations(location_id),
    department_id INTEGER REFERENCES departments(department_id)
);
