export const timeOptionsList = () => {
  const time = [];
  for (let i = 5; i <= 120; i += 5) {
    time.push({ label: `${i} min`, value: i });
  }
  return time;
};
