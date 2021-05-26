const addTimeDecorator = (time: string) => {
  const timeTokens = time.split(":");
  return Number(timeTokens[0]) > 12 ? "PM" : "AM";
};

export default addTimeDecorator;
