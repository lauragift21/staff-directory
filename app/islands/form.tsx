import { useState } from 'hono/jsx'
import type { FC } from 'hono/jsx';
import type { Employee } from '../db';

const EmployeeForm: FC = ({ locations, departments }) => {
  const [employee, setEmployee] = useState<Partial<Employee>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement
    const file = target.files && target.files[0] ? target.files[0] : target.value
    setEmployee({ ...employee, [target.name]: file });
  };

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setIsLoading(true);
    console.log('Submitting employee:', employee);
    const formData = new FormData();
    Object.entries(employee).forEach(([key, value]) => {
      if (key !== 'image_file') {
        formData.append(key, value.toString());
      }
    });
    if (employee.image_file instanceof File) {
      formData.append('image_file', employee.image_file, (employee.image_file as File).name);
    }

    try {
      const response = await fetch('/admin/create', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Network response was not ok.');

      const result = await response.json();
      console.log('Success:', result);
      setEmployee({});
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} method='POST' className="mt-6 space-y-4 flex flex-col justify-items-start">
      <h1 className="text-3xl font-semibold dark:text-white"> Add a New Employee</h1>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-white">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={employee.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 "
        />
      </div>
      <div>
        <label htmlFor="role" className="block text-sm font-medium text-gray-700 dark:text-white">Role</label>
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
        <label htmlFor="Start Date" className="block text-sm font-medium text-gray-700 dark:text-white">Start Date</label>
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
        <label htmlFor="image" className="block text-sm font-medium text-gray-700 dark:text-white">Image</label>
        <input
          type="file"
          name="image_file"
          id="image_file"
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:text-white"
        />
      </div>
      <div>
        <label htmlFor="department" className="block text-sm font-medium text-gray-700 dark:text-white">Department</label>
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
        <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-white">Location</label>
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
        disabled={isLoading}
        className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${isLoading ? 'bg-indigo-400' : 'bg-indigo-600'}`}
      >
        {isLoading ? 'Submitting...' : 'Add Employee'}
      </button>
    </form>
  );
};

export default EmployeeForm;
