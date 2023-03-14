export const stylesMeta = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: 'transparent',
    border: 'unset',
    borderRadius: 'none',
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
    maxHeight: '230px',

    '@media (min-width: 768px)': {
      fontSize: '16px',
      lineHeight: '1.3',
    },
  }),

  option: (baseStyles, state) => ({
    ...baseStyles,
    color: state.isSelected ? '#8BAA36' : baseStyles.color,
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

export const stylesIngredient = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: '#D9D9D9',
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
    textAlign: 'left',
    width: '155px',
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
    maxHeight: '230px',

    '@media (min-width: 768px)': {
      fontSize: '16px',
      lineHeight: '1.3',
    },
  }),

  option: (baseStyles, state) => ({
    ...baseStyles,
    color: state.isSelected ? '#8BAA36' : baseStyles.color,
    backgroundColor: 'transparent',
  }),

  dropdownIndicator: baseStyles => ({
    ...baseStyles,
    display: 'none',
    color: '#8BAA36',
    opacity: 1,
  }),
  indicatorSeparator: baseStyles => ({
    ...baseStyles,
    display: 'none',
    opacity: 0,
  }),
  menu: baseStyles => ({
    ...baseStyles,
    margin: 0,
  }),
};

export const stylesUnit = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: '#D9D9D9',
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
    width: '75px',
    height: '50px',
    '@media (min-width: 768px)': {
      fontSize: '16px',
      lineHeight: '1.3',
      width: '85px',
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

    '@media (min-width: 768px)': {
      fontSize: '16px',
      lineHeight: '1.3',
    },
  }),

  option: (baseStyles, state) => ({
    ...baseStyles,
    color: state.isSelected ? '#8BAA36' : baseStyles.color,
    backgroundColor: 'transparent',
  }),

  dropdownIndicator: baseStyles => ({
    ...baseStyles,
    color: '#8BAA36',
    opacity: 1,
  }),
  indicatorSeparator: baseStyles => ({
    ...baseStyles,
    display: 'none',
    opacity: 0,
  }),
  menu: baseStyles => ({
    ...baseStyles,
    margin: 0,
  }),
};
