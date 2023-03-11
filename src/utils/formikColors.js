export const getColor = (errors, values) => {
  return values
    ? (errors && '#E74A3B') || '#3CBC81'
    : 'rgba(255, 255, 255, 0.8)';
};

export const getColorBorder = (errors, values) => {
  return values
    ? (errors && '#E74A3B') || '#3CBC81'
    : 'rgba(255, 255, 255, 0.3)';
};
