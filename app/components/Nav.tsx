export const Nav = () => {
  return (
    <nav class="bg-white border-gray-200 dark:bg-gray-800">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Staff Hub Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Staff Directory</span>
        </a>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a href="/employees/create" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">Add Employee</a>
        </div>
      </div>
    </nav>
  )
}
