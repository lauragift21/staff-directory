export const Footer = () => {
  return (
    <footer class="fixed bottom-0 left-0 z-20 w-full p-4 border-t border-gray-200 shadow md:p-6 dark:bg-gray-800 dark:border-gray-600 md:flex md:items-center md:justify-around">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" class="hover:underline">Staff Directory</a>. All Rights Reserved.
      </span>
      <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <p class="me-4 md:me-6">Made with HonoX + Cloudflare Pages + D1 + ❤️</p>
        </li>
        <li>
          <a href="https://github.com/lauragift21/staff-hub" class="hover:underline me-4 md:me-6">GitHub</a>
        </li>
      </ul>
    </footer>
  )
}