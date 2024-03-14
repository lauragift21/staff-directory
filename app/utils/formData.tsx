// Utility function to get value from formData and convert to string with a default
function getFormDataValue(formData: FormData, key: string, defaultValue: string = ''): string {
  return formData.get(key)?.toString() ?? defaultValue;
}

// Utility function for numbers, with an optional default value
function getFormDataNumber(formData: FormData, key: string, defaultValue: number = 0): number {
  const value = formData.get(key);
  return value ? Number(value) : defaultValue;
}

export { getFormDataValue, getFormDataNumber };
