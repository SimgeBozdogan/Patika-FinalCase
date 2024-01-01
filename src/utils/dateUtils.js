export function convertTimestampToDateString(timestamp) {
  const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
  const formattedDate = date.toLocaleString(); // Adjust formatting as needed
  return formattedDate;
}