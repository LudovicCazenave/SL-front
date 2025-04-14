
export function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.toLocaleString('fr-FR', { day: '2-digit' });
  const month = date.toLocaleString('fr-FR', { month: 'long' });
  const year = date.getFullYear();
  const monthCapitalized = month.charAt(0).toUpperCase() + month.slice(1);
  return `${day} ${monthCapitalized} ${year}`;
};


export function formatHour(timeString) {
  if (!timeString){
    return "";
  } 
  const hours = timeString.split(':')[0];
  return hours;
}

