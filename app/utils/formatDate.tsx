/**
 * Formats a date string to "Month, Day Year" format.
 * @param {string} dateString - The date string to format.
 * @returns {string} - The formatted date string.
 */
export function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).replace(',', ',');
}
