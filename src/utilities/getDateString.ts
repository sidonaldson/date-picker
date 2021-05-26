const getDateString = (date?: Date) => {
  const newDate = date ? new Date(date) : new Date();
  return new Date(newDate.getTime() - newDate.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, -1);
};

export default getDateString;
