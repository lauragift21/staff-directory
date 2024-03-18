/**
 * Retrieves a string value from FormData for a given key, with an option for a default value.
 *
 * @param {FormData} formData - The FormData instance to query.
 * @param {string} key - The key of the value to retrieve.
 * @param {string} [defaultValue=''] - The default value if the key is not found. Defaults to an empty string.
 * @returns {string} - The value as a string, or the default value if not found.
 */

function getFormDataValue(formData: FormData, key: string, defaultValue: string = ''): string {
  return formData.get(key)?.toString() ?? defaultValue;
}

/**
 * Retrieves a string value from FormData for a given key, with an option for a default value.
 *
 * @param {FormData} formData - The FormData instance to query.
 * @param {string} key - The key of the value to retrieve.
 * @param {string} [defaultValue=''] - The default value if the key is not found. Defaults to an empty string.
 * @returns {string} - The value as a string, or the default value if not found.
 */

function getFormDataNumber(formData: FormData, key: string, defaultValue: number = 0): number {
  const value = formData.get(key);
  return value ? Number(value) : defaultValue;
}

export { getFormDataValue, getFormDataNumber };
