import { useState } from 'hono/jsx'
import type { FC } from 'hono/jsx';
import type { Employee } from '../db';

const EmployeeForm: FC = ({ locations, departments}) => {
  const [employee, setEmployee] = useState<Partial<Employee>>({});

  const handleChange = (e: Event) => {
    const target = e.target as HTMLTextAreaElement
    setEmployee({ ...employee, [target.name]: target.value });
  };

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    console.log('Submitting employee:', employee);
    try {
      const response = await fetch('/employees/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(employee),
      });
  
      if (!response.ok) throw new Error('Network response was not ok.');
  
      const result = await response.json();
      console.log('Success:', result);
      setEmployee({});
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} method='POST' className="mt-6 space-y-4 flex flex-col justify-items-start">
      <h1 className="text-3xl font-semibold"> Add a New Employee</h1>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={employee.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div>
        <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
        <input
          type="text"
          name="position"
          id="position"
          value={employee.position}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div>
        <label htmlFor="Start Date" className="block text-sm font-medium text-gray-700">Start Date</label>
        <input
          type="date"
          name="join_date"
          id="join_date"
          value={employee.join_date}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div>
        <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image</label>
        <input
          type="file"
          name="image_url"
          id="image_url"
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div>
        <label htmlFor="department" className="block text-sm font-medium text-gray-700">Department</label>
        <select
          name="department_id"
          id="department_id"
          value={employee.department_id}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="">Select Department</option>
          {departments.map((d: any) => (
            <option key={d.department_id} value={d.department_id}>
              {d.department_name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
        <select
          name="location_id"
          id="location_id"
          value={employee.location_id}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="">Select Location</option>
          {locations.map((l: any) => (
            <option key={l.location_id} value={l.location_id}>
              {l.location_name}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Add Employee
      </button>
    </form>
  );
};

export default EmployeeForm;
