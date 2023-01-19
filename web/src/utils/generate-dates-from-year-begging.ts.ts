import dayjs from "dayjs";

export function generateDatesFromYearBegging() {
  const today = new Date();
  const firstDayOfTheYear = dayjs().startOf("year");

  const dates = [];
  let compareDate = firstDayOfTheYear;

  while (compareDate.isBefore(today)) {
    dates.push(compareDate.toDate());
    compareDate = compareDate.add(1, "day");
  }

  return dates;
}
