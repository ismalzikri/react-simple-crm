export function formatDate(dateInput: string | number | Date): string {
  const date = new Date(dateInput);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();
  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
}
