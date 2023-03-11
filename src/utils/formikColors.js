export const getColor = (errors, values) => {
  return values ? (errors && '#E74A3B') || '#3CBC81' : '#C4C4C4';
};

export const getColorBorder = (errors, values) => {
  return values ? (errors && '#E74A3B') || '#3CBC81' : '#C4C4C4';
};
