export function getTodayDateString(): string {
  const date = new Date();
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  const dateString = `${year}-${month}-${day}`;
  // const dateStringAlt = `${day}-${month}-${year}`;
  console.log(dateString);
  return dateString;
}
