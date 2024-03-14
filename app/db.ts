export type Employee = {
  employee_id: string;
  name: string;
  position: string;
  image_url: string;
  join_date: string;
  location_id: number;
  department_id: number;
  location_name: string;
  department_name: string;
  image_file?: File;
};

export const findAllEmployees = async (db: D1Database) => {
  const query = `
      SELECT employees.*, locations.location_name, departments.department_name 
      FROM employees
      JOIN locations ON employees.location_id = locations.location_id
      JOIN departments ON employees.department_id = departments.department_id
      `;
  const { results } = await db.prepare(query).all();
  const employees = results;
  return employees;
};

export const findEmployeeById = async (db: D1Database, id: string) => {
  const query = `
      SELECT employees.*, locations.location_name, departments.department_name 
      FROM employees
      JOIN locations ON employees.location_id = locations.location_id
      JOIN departments ON employees.department_id = departments.department_id
      WHERE employee_id = ?`;

  const employee = await db.prepare(query).bind(id).first();
  return employee;
};

export const createEmployee = async (
  db: D1Database,
  employee: Employee
) => {
  const query = `
      INSERT INTO employees (name, position, join_date, image_url, department_id, location_id)
      VALUES (?, ?, ?, ?, ?, ?)`;

  const results  = await db
    .prepare(query)
    .bind(employee.name, employee.position,  employee.join_date, employee.image_url, employee.department_id, employee.location_id)
    .run();
  const employees = results;
  return employees;
};

export const findAllLocations = async (db: D1Database) => {
  const { results } = await db
    .prepare("SELECT * FROM locations ORDER BY location_name ASC")
    .all();
  const locations = results;
  return locations;
};

export const findAllDepartments = async (db: D1Database) => {
  const { results } = await db
    .prepare("SELECT * FROM departments ORDER BY department_name ASC")
    .all();
  const locations = results;
  return locations;
};
