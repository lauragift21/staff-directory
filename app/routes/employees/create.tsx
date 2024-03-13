import { createRoute } from 'honox/factory'
import EmployeeForm from '../../islands/form'
import { findAllDepartments, findAllLocations, createEmployee } from '../../db'

export default createRoute(async (c) => {
  const locations = await findAllLocations(c.env.DB)
  const departments = await findAllDepartments(c.env.DB)
  return c.render(
    <EmployeeForm locations={locations} departments={departments} />
  )
})

export const POST = createRoute(async (c) => {
  try {
    const formData = await c.req.json();
    console.log('Received form data:', formData);
    await createEmployee(c.env.DB, formData);

    return c.redirect('/', 303);
  } catch (error) {
    console.error('Error handling POST request:', error);
    return new Response('Error processing your request', { status: 500 });
  }
});
