const startOfDay = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
};

const setDateTime = (date: Date, h: string, m: string, s: string) => {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    Number(h),
    Number(m),
    Number(s)
  );
};

const futureDate = (date: Date, days: number) => {
  return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
};

export { startOfDay, setDateTime, futureDate };
