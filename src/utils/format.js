export function formatDate(dateString) {
  // Create a Date object from the given string.
  const date = new Date(dateString);
  
  // Extract the day in two-digit format (e.g., "05").
  const day = date.toLocaleString('fr-FR', { day: '2-digit' });
  
  // Extract the full month name in French (e.g., "avril").
  const month = date.toLocaleString('fr-FR', { month: 'long' });
  const year = date.getFullYear();
  
  // Capitalize the first letter of the month.
  const monthCapitalized = month.charAt(0).toUpperCase() + month.slice(1);
  
  // Return the formatted date in the format "DD Month YYYY".
  return `${day} ${monthCapitalized} ${year}`;
};

export function formatHour(timeString) {
  // If no time is provided, return an empty string.
  if (!timeString) {
    return "";
  }
  
  // Split the time string by ':' and return only the hour part.
  const hours = timeString.split(':')[0];
  return hours;
}