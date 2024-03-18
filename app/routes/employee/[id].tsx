import { createRoute } from 'honox/factory'
import { findEmployeeById } from '../../db'
import { formatDate } from '../../utils/formatDate'

export const GET = createRoute(async (c) => {
  const id = c.req.param('id')
  const employee = await findEmployeeById(c.env.DB, id)
  if (!employee) {
    return c.render(<><h1>Employee Not Found</h1></>);
  }
  const formattedDate = formatDate(employee.join_date as string);

  return c.render(
    <>
      <section className="mt-6 p-14 flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-indigo-500 to-violet-600">
        <div className="text-center md:text-left">
          <h2 className="text-4xl text-white font-bold">{employee.name}</h2>
          <p className="text-white font-semibold text-2xl">{employee.position}</p>
          <div className="flex items-center space-x-2 pt-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <p className="text-xl text-white">{employee.location_name}</p>
          </div>
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
            </svg>
            <p className="text-white text-xl">Started on {formattedDate}</p>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <img src={employee.image_url} alt={`Photo of ${employee.name}`} className="max-w-xs md:max-w-sm mx-auto" />
        </div>
      </section>
      <section className="px-14 my-12 font-bold">
        <h2 className="text-3xl pb-4 dark:text-white">Department</h2>
        <hr />
        <p className="text-2xl py-4 dark:text-white">{employee.department_name}</p>
      </section>
    </>
  )
})