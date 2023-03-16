export const getColor = (
  errors,
  values,
  defaultColor = 'rgba(255, 255, 255, 0.8)'
) => {
    if (errors === 'Your password is little secure. Add a number!' || errors === 'Your password is little secure. Add a letter!') {
      return '#F6C23E'
    }
  return values ? (errors && '#E74A3B') || '#3CBC81' : defaultColor;
};

