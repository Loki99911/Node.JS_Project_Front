const color = theme => {
  return theme === 'light' ? '#8BAA36' : 'white';
};

export const stylesMeta = theme => {
  return {
    control: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: 'transparent',
      border: 'unset',
      borderRadius: '6px',
      borderColor: state.isFocused ? 'transparent' : '#D9D9D9',
      boxShadow: state.isFocused && '0 0 0 1px transparent',
      fontFamily: 'inherit',
      fontStyle: 'inherit',
      fontWeight: '600',
      fontSize: '12px',
      lineHeight: '1.5',
      letterSpacing: '-0.02em',
      textAlign: 'right',
      width: '146px',
      height: '50px',
      '@media (min-width: 768px)': {
        fontSize: '16px',
        lineHeight: '1.3',
      },
    }),
    menuList: (baseStyles, state) => ({
      ...baseStyles,
      fontFamily: 'inherit',
      fontStyle: 'inherit',
      fontWeight: '400',
      fontSize: '12px',
      lineHeight: '1.5',
      textAlign: 'right',
      letterSpacing: '-0.02em',
      maxHeight: '200px',
      borderRadius: '6px',
      backgroundColor: theme === 'light' ? 'white' : '#8BAA36',
      color: theme === 'light' ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)',

      '@media (min-width: 768px)': {
        fontSize: '16px',
        lineHeight: '1.3',
        maxHeight: '230px',
      },
    }),
    option: (baseStyles, state) => ({
      ...baseStyles,
      color: state.isSelected ? color(theme) : baseStyles.color,
      backgroundColor: 'transparent',
    }),
    dropdownIndicator: baseStyles => ({
      ...baseStyles,
      color: '#8BAA36',
      opacity: 1,
    }),
    indicatorSeparator: baseStyles => ({
      ...baseStyles,
      opacity: 0,
    }),
    menu: baseStyles => ({
      ...baseStyles,
      margin: 0,
    }),
  };
};

export const stylesIngredient = theme => {
  return {
    control: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: theme === 'light' ? 'rgb(217, 217, 217)' : 'transparent',
      borderRadius: '6px',
      borderColor: state.isFocused ? '#D9D9D9' : '#D9D9D9',
      ':hover': {
        borderColor: '#D9D9D9',
      },
      boxShadow: state.isFocused && '0 0 0 1px transparent',
      fontFamily: 'inherit',
      fontStyle: 'inherit',
      fontWeight: '600',
      fontSize: '12px',
      lineHeight: '1.5',
      letterSpacing: '-0.02em',
      textAlign: 'left',
      width: '185px',
      height: '50px',
      '@media (min-width: 768px)': {
        fontSize: '16px',
        lineHeight: '1.3',
        width: '400px',
      },
    }),
    menuList: (baseStyles, state) => ({
      ...baseStyles,
      fontFamily: 'inherit',
      fontStyle: 'inherit',
      fontWeight: '400',
      fontSize: '12px',
      lineHeight: '1.5',
      textAlign: 'left',
      letterSpacing: '-0.02em',
      maxHeight: '200px',
      borderRadius: '6px',
      backgroundColor: theme === 'light' ? 'white' : '#8BAA36',
      color: theme === 'light' ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)',

      '@media (min-width: 768px)': {
        fontSize: '16px',
        lineHeight: '1.3',
        maxHeight: '230px',
      },
    }),
    option: (baseStyles, state) => ({
      ...baseStyles,
      color: state.isSelected ? color(theme) : baseStyles.color,
      backgroundColor: 'transparent',
    }),
    dropdownIndicator: baseStyles => ({
      ...baseStyles,
      color: '#8BAA36',
      opacity: 1,
    }),
    indicatorSeparator: baseStyles => ({
      ...baseStyles,
      opacity: 0,
    }),
    menu: baseStyles => ({
      ...baseStyles,
      margin: 0,
    }),
  };
};

export const stylesUnit = theme => {
  return {
    control: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: theme === 'light' ? 'rgb(217, 217, 217)' : 'transparent',
      outline: theme === 'light' ? 'none' : "1px solid 'rgb(217, 217, 217)'",
      borderRadius: '6px',
      borderColor: state.isFocused ? 'transparent' : 'transparent',
      ':hover': {
        borderColor: 'transparent',
      },
      outlineColor: state.isFocused ? 'transparent' : '#D9D9D9',
      boxShadow: state.isFocused && '0 0 0 1px transparent',
      fontFamily: 'inherit',
      fontStyle: 'inherit',
      fontWeight: '600',
      fontSize: '12px',
      lineHeight: '1.5',
      letterSpacing: '-0.02em',
      textAlign: 'right',
      width: '82px',
      height: '50px',
      '@media (min-width: 768px)': {
        fontSize: '16px',
        lineHeight: '1.3',
      },
    }),
    menuList: (baseStyles, state) => ({
      ...baseStyles,
      fontFamily: 'inherit',
      fontStyle: 'inherit',
      fontWeight: '400',
      fontSize: '12px',
      lineHeight: '1.5',
      textAlign: 'center',
      letterSpacing: '-0.02em',
      maxHeight: '200px',
      borderRadius: '6px',
      backgroundColor: theme === 'light' ? 'white' : '#8BAA36',
      color: theme === 'light' ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)',

      '@media (min-width: 768px)': {
        fontSize: '16px',
        lineHeight: '1.3',
        maxHeight: '230px',
      },
    }),
    option: (baseStyles, state) => ({
      ...baseStyles,
      color: state.isSelected ? color(theme) : baseStyles.color,
      backgroundColor: 'transparent',
    }),
    dropdownIndicator: baseStyles => ({
      ...baseStyles,
      color: '#8BAA36',
      opacity: 1,
    }),
    indicatorSeparator: baseStyles => ({
      ...baseStyles,
      opacity: 0,
    }),
    menu: baseStyles => ({
      ...baseStyles,
      margin: 0,
    }),
  };
};
