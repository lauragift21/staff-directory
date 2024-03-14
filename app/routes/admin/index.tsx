import { createRoute } from 'honox/factory'
import EmployeeForm from '../../islands/form'
import { findAllDepartments, findAllLocations } from '../../db'

export default createRoute(async (c) => {
  const locations = await findAllLocations(c.env.DB)
  const departments = await findAllDepartments(c.env.DB)
  return c.render(
    <EmployeeForm locations={locations} departments={departments} />
  )
})