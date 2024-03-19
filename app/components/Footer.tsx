export const Footer = () => {
  return (
    <footer className="w-full p-4 border-gray-200 md:p-6 dark:bg-gray-800 dark:border-gray-600 md:flex md:items-center md:justify-between">
      <span className="block text-xs text-gray-500 sm:text-sm md:text-base lg:text-md text-center md:text-left dark:text-gray-400">© 2024 <a href="#" className="hover:underline">Staff Directory</a>. All Rights Reserved.</span>
      <ul className="flex flex-wrap items-center justify-center mt-3 text-xs sm:text-sm md:text-base lg:text-md font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <p className="mr-4 md:mr-6">Made with ❤️ by HonoX + Cloudflare Pages + D1</p>
        </li>
        <li>
          <a href="https://github.com/lauragift21/staff-directory" className="hover:underline mr-4 md:mr-6">GitHub</a>
        </li>
      </ul>
    </footer>
  );
};
