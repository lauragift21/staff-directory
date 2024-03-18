import { createRoute } from 'honox/factory'
import type { FC } from 'hono/jsx'
import type { Employee } from '../db'
import { findAllEmployees, findAllDepartments, findAllLocations } from '../db'

const EmployeeCard: FC<{ employee: Employee }> = ({ employee }) => {
  const { employee_id, name, image_url, department_name, location_name } = employee;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
      <a href={`/employee/${employee_id}`}>
        <img className="bg-indigo-600 p-4 rounded-t-lg" src={image_url} alt={name} />
        <div className="p-4">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{name}</h5>
          <p className="font-normal text-gray-700">{department_name}</p>
          <p className="font-normal text-gray-700">{location_name}</p>
        </div>
      </a>
    </div>
  );
};

export const GET = createRoute(async (c) => {
  const employees = await findAllEmployees(c.env.DB)
  const locations = await findAllLocations(c.env.DB)
  const departments = await findAllDepartments(c.env.DB)
  return c.render(
    <section className="flex-grow">
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl mt-12">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-sky-400">{`Directory `}</span>
      </h1>
      <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-white">Find all your colleagues in one place, making work collaboration easier than ever.</p>
      <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"></p>
      <section className="my-12">
        <button type="button" class="inline-flex items-center font-bolder mr-10 mb-4 px-10 py-2.5 text-xl font-medium text-center text-gray-500 shadow-lg rounded-lg hover:bg-blue-200 hover:text-blue-400 border border-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:text-white">
          {employees.length} <span className="px-1 text-sm">People</span>
        </button>
        <button type="button" class="inline-flex items-center font-bolder mr-10 mb-4  px-10 py-2.5 text-xl font-medium text-center text-gray-500 shadow-lg rounded-lg hover:bg-red-200 hover:text-red-400 border border-red-400 focus:ring-4 focus:outline-none focus:ring-red-300 dark:text-white">
          {departments.length} <span className="px-1 text-sm">Departments</span>
        </button>
        <button type="button" class="inline-flex items-center font-bolder px-10 py-2.5 text-xl font-medium text-center text-gray-500 shadow-lg rounded-lg hover:bg-indigo-200 hover:text-indigo-400 border border-indigo-400 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:text-white">
          {locations.length} <span className="px-1 text-sm">Locations</span>
        </button>
      </section>
      <section className="flex flex-wrap -mx-4">
        {employees.map((employee) => (
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
            <EmployeeCard employee={employee} />
          </div>
        ))}
      </section>
    </section>
  )
})