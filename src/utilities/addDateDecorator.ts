const addDateDecorator = (n: number) => {
  const ords = ["", "st", "nd", "rd"];
  const m = n % 100;
  return n + (m > 10 && m < 14 ? "th" : ords[m % 10] || "th");
};

export default addDateDecorator;
