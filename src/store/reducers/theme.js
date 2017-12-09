import get from 'lodash/get';
import color from 'color';

const themeColors = (colors = {}) => {
  const main = get(colors, 'main', '#2B8AC6');
  const highlight = get(colors, 'highlight');

  const light = '#fff';
  const dark = '#000';
  const grey = '#333';

  const luminosity = color(main).luminosity();
  const negative = luminosity < 0.25;

  const fallbackColor = (first, second) => first || second;

  return {
    button: {
      backgroundColor: main,
      iconColor: negative ? light : dark,
      textColor: negative ? light : dark,
      textSize: '16px',
      width: '180px',
      height: '54px'
    }
  }
};

const theme = (state = {}, action) => {
  switch (action.type) {
    case 'INIT':
      return Object.assign({}, state, themeColors(get(action.payload, 'theme')));
    case 'SET_THEME':
      return Object.assign({}, state, themeColors(action.payload));
    default:
      return state;
  }
};

export {
  theme
}
